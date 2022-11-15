#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESPAsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <WebSerial.h>
#include <FS.h>
#include <FastLED.h>

#define LED_BUILTIN 2
#define NUM_LEDS 3
#define DATA_PIN 1

AsyncWebServer server(80);
const char* ssid = "salty";
const char* password = "salty123";

bool ledOn;
CRGB leds[NUM_LEDS];

void notFound(AsyncWebServerRequest *request) {
    request->send(404, "text/plain", "Not found");
}



void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  // FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);

  // Server Setup ------------------------------------------------------
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  Serial.println("");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
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

  WebSerial.begin(&server);
  server.begin();
  // -------------------------------------------------------------------

  server.on("/led", HTTP_PUT, [] (AsyncWebServerRequest *request) {
    WebSerial.println("asdasdasd");

    int ledOnState = request->params();
    WebSerial.println(ledOnState);
    ledOn = (ledOnState != '0');
    
    digitalWrite(LED_BUILTIN, ledOn);

    request->send(200, "text/plain", "led PUT request");
  });
}

void loop() {
  fill_solid( leds, NUM_LEDS, CHSV(0,255,50));
  FastLED.show();
  delay(1000);
}