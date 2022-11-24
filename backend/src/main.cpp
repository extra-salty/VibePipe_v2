#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <WebSerial.h>
#include <FS.h>
#include <ArduinoJson.h>
#include <FastLED.h>

#define LED_BUILTIN 2
#define NUM_LEDS 3
#define DATA_PIN 1

AsyncWebServer server(80);
AsyncWebSocket ws("/ws");
const char* ssid = "salty";
const char* password = "salty123";

bool ledOn;
CRGB leds[NUM_LEDS];

void types(String a) { WebSerial.println("it's a String"); }
void types(int a) { WebSerial.println("it's an int"); }
void types(char *a) { WebSerial.println("it's a char*"); }
void types(float a) { WebSerial.println("it's a float"); }
void types(bool a) { WebSerial.println("it's a bool"); }

void notFound(AsyncWebServerRequest *request) {
    request->send(404, "text/plain", "Not found");
}

void onEvent(AsyncWebSocket * server,
            AsyncWebSocketClient * client,
            AwsEventType type,
            void * arg,
            uint8_t *data,
            size_t len) {
  if(type == WS_EVT_CONNECT){
    WebSerial.println("WS connected");
  } else if(type == WS_EVT_DISCONNECT){
    WebSerial.println("WS disconnected");
  } else if(type == WS_EVT_ERROR){
    WebSerial.println("WS error");
  } else if(type == WS_EVT_PONG){
    WebSerial.println("WS pong");
  } else if(type == WS_EVT_DATA){
    AwsFrameInfo * info = (AwsFrameInfo*)arg;
    if(info->final && info->index == 0 && info->len == len){
      if(info->opcode == WS_TEXT){
      data[len] = 0;
      int hue = atoi((const char *)data);
      hue = ceil(hue * 255 / 360);
      fill_solid( leds, NUM_LEDS, CHSV(hue,255,100));
      }
    } else {
      for(size_t i=0; i < info->len; i++){
        WebSerial.println(data[i]);
      }
    }
  } 
}


void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);

  // Server Setup ------------------------------------------------------
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  Serial.println("Connecting to WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    pinMode(LED_BUILTIN, true);
    delay(500);
    pinMode(LED_BUILTIN, false);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  if (!SPIFFS.begin()) {
    Serial.println("An Error has occurred while mounting SPIFFS");
  } else {
    Serial.println("SPIFF mounted successfully.");
  }
  server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");
  
  server.onNotFound(notFound);
  ws.onEvent(onEvent);	
  server.addHandler(&ws);

  server.begin();
  WebSerial.begin(&server);
  // -------------------------------------------------------------------

  server.on("/led", HTTP_PUT, [] (AsyncWebServerRequest *request) {
    bool onBoardLed = false;
    if(request->hasParam("state")){
    onBoardLed = request->getParam("state")->value() == "true";
    }

    digitalWrite(LED_BUILTIN, onBoardLed);

    request->send(200, "text/plain", "led PUT request");
  });

  server.on("/hsv", HTTP_PUT, [] (AsyncWebServerRequest *request) {
    int hue = 0;
    if(request->hasParam("hue")){
    hue = request->getParam("hue")->value().toInt();
    hue = ceil(hue * 255 / 360);
    }
    fill_solid( leds, NUM_LEDS, CHSV(hue,255,100));

    request->send(200, "text/plain", "hsv PUT request");
  });

}

void loop() {
  FastLED.show();
  delay(10);
}