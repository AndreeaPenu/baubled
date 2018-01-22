from neopixel import *
import _rpi_ws281x as ws
import time
import math
import argparse


# LED strip configuration:
LED_COUNT = 10      # Number of LED pixels.
LED_PIN = 21      # GPIO pin connected to the pixels (must support PWM!).
LED_FREQ_HZ = 800000  # LED signal frequency in hertz (usually 800khz)
LED_DMA = 10      # DMA channel to use for generating signal (try 10)
LED_BRIGHTNESS = 255     # Set to 0 for darkest and 255 for brightest
# True to invert the signal (when using NPN transistor level shift)
LED_INVERT = False
LED_CHANNEL = 0
# LED_STRIP = ws.SK6812_STRIP_RGBW
LED_STRIP = ws.SK6812W_STRIP


def showColor(strip, pixel, color):
    strip.setPixelColor(pixel, color)
    strip.show()

def turnOff(strip):
    for i in range(strip.numPixels()):
        strip.setPixelColor(i, 0)
    strip.show()

def dragColor(strip, color):
    for i in range(strip.numPixels()):
        showColor(strip, i, color)
        time.sleep(0.05)
        showColor(strip, i, 0)


def dragColorReverse(strip, color):
    for i in reversed(range(strip.numPixels())):
        showColor(strip, i, color)
        time.sleep(0.05)
        showColor(strip, i, 0)

def blink(strip, color, rate=250):
    for i in range(strip.numPixels()):
        strip.setPixelColor(i, color)
    strip.show()
    time.sleep(rate/1000)
    for i in range(strip.numPixels()):
        strip.setPixelColor(i, 0)
    strip.show()
    time.sleep(rate/1000)

def bounce(strip, color):
    for i in range(2):
        if i == 0:
            dragColor(strip, color)
        else:
            dragColorReverse(strip, color)


def rainbowBounce(strip):
    for i in range(2):
        if i == 0:
            dragColor(strip, color)
        else:
            dragColorReverse(strip, color)


def wheel(pos, steps=255):
    """Generate rainbow colors across 0-255 positions."""
    if pos < 85:
        return Color(pos * 3, 255 - pos * 3, 0)
    elif pos < 170:
        pos -= 85
        return Color(255 - pos * 3, 0, pos * 3)
    else:
        pos -= 170
        return Color(0, pos * 3, 255 - pos * 3)


def rainbow(strip, wait_ms=20, iterations=1):
    """Draw rainbow that fades across all pixels at once."""
    for j in range(256 * iterations):
        for i in range(strip.numPixels()):
            strip.setPixelColor(i, wheel((i + j) & 255))
        strip.show()
        time.sleep(wait_ms / 1000.0)


def rainbow_flicker(strip, flicker_rate=50):
    for j in range(256):
        for i in range(strip.numPixels()):
            strip.setPixelColor(i, wheel((i + j) & 255, 32))
        strip.show()
        time.sleep(flicker_rate / 1000.0)
        for i in range(strip.numPixels()):
            strip.setPixelColor(i, 0)
        strip.show()
        time.sleep(flicker_rate / 1000.0)


def rainbowCycle(strip, wait_ms=20, iterations=5):
    """Draw rainbow that uniformly distributes itself across all pixels."""
    for j in range(256 * iterations):
        for i in range(strip.numPixels()):
            strip.setPixelColor(
                i, wheel(((i * 256 / strip.numPixels()) + j) & 255))
        strip.show()
        time.sleep(wait_ms / 1000.0)

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Control leds from baubled')
    parser.add_argument('-c', '--color', help='specify color')
    parser.add_argument('-e', '--effect', help='specify effect')
    parser.add_argument('-o', '--on', help='specify enabled/disabled')

    args = parser.parse_args()
    effect = args.effect
    status = args.on

    c = args.color.lstrip('#')
    colorTuple = tuple(int(c[i:i+2], 16) for i in (0, 2 ,4))
    color = Color(colorTuple[0], colorTuple[1], colorTuple[2])

    # Create NeoPixel object with appropriate configuration.
    strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, LED_FREQ_HZ,
                              LED_DMA, LED_INVERT, LED_BRIGHTNESS, LED_CHANNEL, LED_STRIP)
    # Intialize the library (must be called once before other functions).
    strip.begin()
    while True:
        if status:
            if effect =='flikker':
                blink(strip, color)
            elif effect == 'rainbow':
                rainbow(strip)
        else:
            turnOff(strip)
