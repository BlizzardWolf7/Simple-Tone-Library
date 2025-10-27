// =========================
// Simple Tone Library
// =========================

const ToneLib = (() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    function playTone(type = "sine", freqs = [], duration = 0.2, volume = 0.3) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.connect(gain);
        gain.connect(ctx.destination);

        // Schedule frequencies
        freqs.forEach((f, i) => {
            osc.frequency.setValueAtTime(f, ctx.currentTime + (i * (duration / freqs.length)));
        });

        // Volume envelope
        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    }

    // ---------------------
    // PREMADE UI SOUNDS
    // ---------------------

    function ping() {
        playTone("sine", [900, 1200], 0.2, 0.3);
    }

    function bell() {
        playTone("triangle", [600, 1000], 0.5, 0.25);
    }

    function success() {
        playTone("sine", [500, 800], 0.4, 0.25);
    }

    function error() {
        playTone("square", [300, 200, 300, 200], 0.25, 0.28);
    }

    function click() {
        playTone("square", [1800], 0.05, 0.2);
    }

    function warning() {
        playTone("square", [700, 600], 0.4, 0.3);
    }

    function notify() {
        playTone("sine", [880, 1108], 0.3, 0.25);
    }

    function pop() {
        playTone("square", [800, 400], 0.1, 0.15);
    }

    function zap() {
        playTone("sawtooth", [200, 800], 0.15, 0.2);
    }

    function ding() {
        playTone("triangle", [800, 1200, 1600], 0.3, 0.2);
    }

    function buzz() {
        playTone("sawtooth", [150, 200], 0.2, 0.25);
    }

    function swish() {
        playTone("sine", [800, 600], 0.25, 0.2);
    }

    function blip() {
        playTone("square", [1200], 0.03, 0.15);
    }

    function swoosh() {
        playTone("sawtooth", [300, 1500, 300], 0.3, 0.2);
    }

    function bleep() {
        playTone("sine", [1000, 1100], 0.08, 0.18);
    }

    function pulse() {
        playTone("sine", [500, 800, 500], 0.4, 0.22);
    }

    function shimmer() {
        playTone("triangle", [600, 800, 1000, 1200], 0.3, 0.2);
    }

    // ---------------------
    // SEQUENCED MELODIES
    // ---------------------

    function playSequence(notes, tempo = 200, type = "sine") {
        const noteDuration = tempo / 1000; // Convert ms to seconds
        
        notes.forEach((note, index) => {
            const time = ctx.currentTime + (index * noteDuration);
            
            setTimeout(() => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.type = type;
                osc.frequency.value = typeof note === 'number' ? note : note.freq;
                
                gain.gain.setValueAtTime(0.3, time);
                gain.gain.exponentialRampToValueAtTime(0.001, time + (noteDuration * 0.8));
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.start(time);
                osc.stop(time + (noteDuration * 0.8));
            }, index * tempo);
        });
    }

    function playJingle() {
        // Happy little jingle
        const notes = [523, 587, 659, 784, 1047, 784, 1047];
        playSequence(notes, 150, "sine");
    }

    function playAscending() {
        // Ascending scale
        const notes = [261, 293, 329, 349, 392, 440, 493, 523];
        playSequence(notes, 120, "triangle");
    }

    function playMelody() {
        // Twinkle twinkle variation
        const notes = [
            {freq: 523}, {freq: 523}, {freq: 784}, {freq: 784},
            {freq: 880}, {freq: 880}, {freq: 784},
            {freq: 659}, {freq: 659}, {freq: 587}, {freq: 587},
            {freq: 523}
        ];
        playSequence(notes, 250, "sine");
    }

    function playAlert() {
        // Alert pattern
        const notes = [880, 988, 880, 988, 1047];
        playSequence(notes, 100, "square");
    }

    function playFanfare() {
        // Triumphant fanfare
        const notes = [523, 659, 784, 1047, 1319, 1047, 784, 659];
        playSequence(notes, 120, "triangle");
    }

    function playMysterious() {
        // Mysterious descending pattern
        const notes = [880, 784, 698, 622, 554, 494, 440];
        playSequence(notes, 180, "sine");
    }

    function playAscendingFast() {
        // Fast ascending scale
        const notes = [261, 330, 392, 523, 659, 784, 988, 1175];
        playSequence(notes, 80, "square");
    }

    function playChord() {
        // Harmonic chord
        const notes = [523, 659, 784];
        playSequence(notes, 50, "sine");
    }

    function playStaccato() {
        // Staccato notes
        const notes = [880, 988, 1047, 1175, 1319];
        playSequence(notes, 60, "square");
    }

    function playFuturistic() {
        // Sci-fi arpeggio
        const notes = [330, 392, 494, 587, 698, 784, 988, 1175];
        playSequence(notes, 100, "sine");
    }

    function playGlitch() {
        // Digital glitch pattern
        const notes = [523, 330, 880, 330, 1175, 523, 988, 440];
        playSequence(notes, 70, "square");
    }

    function playBeam() {
        // Energy beam sound
        const notes = [800, 1000, 1200, 1400, 1600];
        playSequence(notes, 50, "sawtooth");
    }

    function playPortal() {
        // Portal opening sound
        const notes = [220, 277, 330, 440, 554, 659, 880];
        playSequence(notes, 80, "triangle");
    }

    function playData() {
        // Data transmission
        const notes = [880, 1047, 880, 1175, 1047, 1319];
        playSequence(notes, 40, "square");
    }

    // ---------------------
    // LOOPED ALARMS
    // ---------------------

    let activeAlarms = new Map();

    function startAlarm(name, pattern = "beep", interval = 1000, volume = 0.2) {
        stopAlarm(name);
        
        const alarmId = setInterval(() => {
            switch(pattern) {
                case "beep":
                    playTone("sine", [800], 0.1, volume);
                    break;
                case "buzz":
                    playTone("square", [400, 450], 0.15, volume);
                    break;
                case "siren":
                    playTone("sine", [600, 800], 0.2, volume);
                    break;
                case "chirp":
                    playTone("sine", [1200, 1500], 0.05, volume * 0.8);
                    break;
                case "whoop":
                    playTone("sine", [400, 800, 1200], 0.3, volume);
                    break;
                default:
                    playTone("sine", [800], 0.1, volume);
            }
        }, interval);
        
        activeAlarms.set(name, alarmId);
    }

    function stopAlarm(name) {
        if (activeAlarms.has(name)) {
            clearInterval(activeAlarms.get(name));
            activeAlarms.delete(name);
        }
    }

    function stopAllAlarms() {
        activeAlarms.forEach((alarmId) => clearInterval(alarmId));
        activeAlarms.clear();
    }

    // ---------------------
    // RINGTONES & LONG ALARMS
    // ---------------------

    function playRingtone(tone = "classic") {
        const tones = {
            classic: [523, 659, 784, 1047, 784, 1047, 1319, 1047],
            soft: [440, 523, 659, 784, 659, 523, 440],
            upbeat: [523, 659, 784, 988, 1175, 1319],
            retro: [330, 392, 494, 587, 698, 784, 988],
            calm: [349, 392, 440, 523, 659, 784],
            happy: [523, 659, 784, 1047, 1319, 1568]
        };
        
        const notes = tones[tone] || tones.classic;
        playSequence(notes, 200, "sine");
    }

    function playPhaser() {
        // Sweeping phaser sound
        const notes = [523, 659, 784, 988, 1175, 1319, 1568];
        notes.forEach((freq, i) => {
            setTimeout(() => {
                playTone("triangle", [freq], 0.3, 0.25);
            }, i * 150);
        });
    }

    function playRadar() {
        // Radar sweep
        const freqs = [400, 500, 600, 700, 800, 700, 600, 500];
        freqs.forEach((freq, i) => {
            setTimeout(() => {
                playTone("sine", [freq], 0.1, 0.2);
            }, i * 80);
        });
    }

    function playTelephone() {
        // Classic telephone ring
        const ring = () => {
            playTone("sine", [800, 1000], 0.2, 0.25);
            setTimeout(() => playTone("sine", [800, 1000], 0.2, 0.25), 250);
            setTimeout(() => playTone("sine", [800, 1000], 0.2, 0.25), 500);
        };
        ring();
    }

    function playNotification() {
        // iOS/Android style notification
        playTone("triangle", [523, 659, 784], 0.4, 0.2);
    }

    // Public API:
    return {
        // UI Sounds
        ping,
        bell,
        success,
        error,
        click,
        warning,
        notify,
        pop,
        zap,
        ding,
        buzz,
        swish,
        blip,
        swoosh,
        bleep,
        pulse,
        shimmer,
        
        // Sequenced Melodies
        playSequence,
        playJingle,
        playAscending,
        playMelody,
        playAlert,
        playFanfare,
        playMysterious,
        playAscendingFast,
        playChord,
        playStaccato,
        playFuturistic,
        playGlitch,
        playBeam,
        playPortal,
        playData,
        
        // Looped Alarms
        startAlarm,
        stopAlarm,
        stopAllAlarms,
        
        // Ringtones & Alarms
        playRingtone,
        playPhaser,
        playRadar,
        playTelephone,
        playNotification,
        
        // Low-level access
        playTone
    };
})();
