

## Plan: Rediseñar Payload Subsystems y System Architecture

### Cambios necesarios

**1. `WhatWeFlySection.tsx` — Solo Wi-Fi HaLow**

- Eliminar el subsistema BLE 5.4 del array `subsystems` y todas las referencias a Bluetooth
- Cambiar el layout de grid 2-col a una sola card hero centrada y más grande para Wi-Fi HaLow
- La card tendrá un diseño más elaborado: icono grande, descripción expandida, specs en columnas dentro de la card
- Actualizar el banner de condiciones: cambiar "2 radios → Active TX" a "1 radio" 
- Actualizar el texto introductorio (ya no son "two complementary protocols")
- Mantener las métricas de telemetría y el banner de condiciones

**2. `ArchitectureSection.tsx` — Rediseño visual/moderno**

Nuevo diseño con tres bloques verticales más visuales y conectados:

```text
┌─────────────────────────────────┐
│  🛰  STRATOSPHERE  (~30 km)    │
│  ┌──────┐ ┌──────┐ ┌────────┐  │
│  │ESP32 │ │HaLow │ │Sensors │  │
│  │ S3   │→│ TX   │ │+ SD    │  │
│  └──────┘ └──────┘ └────────┘  │
└─────────────────────────────────┘
        │  animated dashed line  │
        │  with signal pulses    │
        ▼                        
   ╔═══════════════╗
   ║  RF DOWNLINK  ║  (pill, animated)
   ║  868 MHz      ║
   ╚═══════════════╝
        │
        ▼
┌─────────────────────────────────┐
│  📡  GROUND STATION (sea lvl)  │
│  Antenna → SDR → GNU Radio →   │
│  Analysis (horizontal pipeline) │
└─────────────────────────────────┘
```

Cambios concretos:
- Mantener layout vertical (Payload → RF Link → Ground) que ya funciona bien
- Hacer las cards más grandes y visuales: gradientes más pronunciados, glows más intensos
- Eliminar "BLE 5.4" del bloque Payload (cambiar a 3 módulos: MCU, HaLow TX, SD Logger)
- Eliminar la referencia a "2.4 GHz" del RF Downlink (solo 868 MHz)
- Añadir más presencia visual: bordes animados en las cards, iconos más grandes, separadores con gradiente
- Ground Station: mantener horizontal en desktop pero con cards más elaboradas y conectores animados (dots que pulsan)
- Añadir un label de "altitude scale" al lado izquierdo del diagrama completo (línea vertical con ~30km arriba y 0km abajo)

### Archivos a modificar

| Archivo | Acción |
|---------|--------|
| `src/components/WhatWeFlySection.tsx` | Eliminar BLE, rediseñar como hero card única |
| `src/components/ArchitectureSection.tsx` | Eliminar BLE refs, diseño más visual con scale lateral |

