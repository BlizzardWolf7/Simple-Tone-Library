# ToneLib

A simple, lightweight JavaScript library for generating tones, melodies, and alarm sounds using the Web Audio API.

**Note:** This library was made for fun and to test/play with the Web Audio API.

## Features

- **UI Sounds** - Quick feedback sounds for user interactions (ping, bell, success, error, etc.)
- **Sequenced Melodies** - Multi-note patterns and melodies for notifications
- **Looped Alarms** - Continuous alarms with customizable patterns, intervals, and volume
- **Ringtones & Alarms** - Premade phone-style sounds and alarm patterns

## Quick Start

```html
<script src="toneLib.js"></script>
<script>
    // Play a simple sound
    ToneLib.ping();
    
    // Play a melody
    ToneLib.playJingle();
    
    // Start a looping alarm
    ToneLib.startAlarm('myAlarm', 'beep', 1000, 0.2);
    
    // Stop all alarms
    ToneLib.stopAllAlarms();
</script>
```

## API

### UI Sounds

```javascript
ToneLib.ping()          // Quick ping sound
ToneLib.bell()          // Bell sound
ToneLib.success()       // Success notification
ToneLib.error()         // Error sound
ToneLib.click()         // Click feedback
ToneLib.warning()       // Warning sound
ToneLib.notify()        // Notification
ToneLib.pop()           // Pop sound
ToneLib.zap()           // Zap sound
ToneLib.ding()          // Ding sound
ToneLib.buzz()          // Buzz sound
ToneLib.swish()         // Swish sound
ToneLib.blip()          // Blip sound
ToneLib.swoosh()        // Swoosh sound
ToneLib.bleep()         // Bleep sound
ToneLib.pulse()         // Pulse sound
ToneLib.shimmer()       // Shimmer sound
```

### Melodies

```javascript
ToneLib.playJingle()           // Happy jingle
ToneLib.playAscending()        // Ascending scale
ToneLib.playMelody()           // Twinkle melody
ToneLib.playAlert()            // Alert pattern
ToneLib.playFanfare()          // Triumphant fanfare
ToneLib.playMysterious()       // Mysterious pattern
ToneLib.playAscendingFast()    // Fast ascending scale
ToneLib.playChord()            // Harmonic chord
ToneLib.playStaccato()         // Staccato notes
ToneLib.playFuturistic()       // Sci-fi arpeggio
ToneLib.playGlitch()           // Digital glitch
ToneLib.playBeam()             // Energy beam
ToneLib.playPortal()           // Portal opening
ToneLib.playData()             // Data transmission
```

### Ringtones

```javascript
ToneLib.playRingtone('classic')  // Classic ringtone
ToneLib.playRingtone('soft')     // Soft ringtone
ToneLib.playRingtone('upbeat')   // Upbeat ringtone
ToneLib.playRingtone('retro')    // Retro ringtone
ToneLib.playRingtone('calm')     // Calm ringtone
ToneLib.playRingtone('happy')    // Happy ringtone
ToneLib.playPhaser()             // Phaser sweep
ToneLib.playRadar()              // Radar sweep
ToneLib.playTelephone()          // Classic telephone
ToneLib.playNotification()       // iOS/Android notification
```

### Alarm Control

```javascript
// Start an alarm
ToneLib.startAlarm(name, pattern, interval, volume)

// Stop a specific alarm
ToneLib.stopAlarm(name)

// Stop all alarms
ToneLib.stopAllAlarms()
```

**Alarm Patterns:** `'beep'`, `'buzz'`, `'siren'`, `'chirp'`, `'whoop'`

## Examples

### Button Click Feedback

```javascript
document.getElementById('myButton').addEventListener('click', function() {
    ToneLib.click();
});
```

### Success Notification

```javascript
if (operationSuccessful) {
    ToneLib.success();
} else {
    ToneLib.error();
}
```

### Custom Alarm

```javascript
// Start a siren alarm that beeps every 500ms at volume 0.3
ToneLib.startAlarm('alert', 'siren', 500, 0.3);

// Stop the alarm after 5 seconds
setTimeout(function() {
    ToneLib.stopAlarm('alert');
}, 5000);
```

### Custom Sequence

```javascript
ToneLib.playSequence([440, 554, 659, 784], 200, 'sine');
```

## Browser Support

ToneLib uses the Web Audio API and works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
