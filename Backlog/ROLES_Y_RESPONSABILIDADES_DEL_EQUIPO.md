# Roles y responsabilidades del equipo de LogicLab

## Propósito

Este documento propone una asignación de responsabilidades para los cuatro desarrolladores del proyecto LogicLab. Los nombres se dejan como espacios por completar porque el backlog no identifica quiénes integran el equipo.

La distribución parte de los requisitos del documento **T1 Actividad 5: Construcción de requisitos y casos de uso**: permitir ingresar expresiones booleanas, simplificarlas y explicar el procedimiento, generar tablas de verdad, identificar compuertas y mostrar resultados.

## Asignación de roles

| Desarrollador | Nombre | Rol principal |
|---|---|---|
| Desarrollador 1 | ____________________ | Líder técnico y coordinador de desarrollo |
| Desarrollador 2 | ____________________ | Desarrollador del motor de lógica booleana |
| Desarrollador 3 | ____________________ | Desarrollador de interfaz y experiencia de usuario |
| Desarrollador 4 | ____________________ | Desarrollador de integración y calidad |

## Desarrollador 1: Líder técnico y coordinador de desarrollo

### Responsabilidades

- Organizar las actividades técnicas y dar seguimiento a los acuerdos y bloqueos del equipo.
- Aclarar con el equipo los criterios de aceptación derivados del ERS antes de iniciar cada funcionalidad.
- Definir, junto con los desarrolladores responsables, los contratos entre la interfaz y el motor lógico: formato de entrada, representación de expresiones y estructura de resultados.
- Revisar que las decisiones de implementación mantengan el alcance acordado para la primera versión.
- Coordinar la integración de cambios y revisar que los módulos puedan trabajar juntos.
- Mantener actualizado el registro técnico del proyecto y comunicar cambios que afecten a otros integrantes.

### Resultado esperado

Un equipo coordinado, con interfaces técnicas acordadas y funcionalidades alineadas con los requisitos priorizados.

## Desarrollador 2: Desarrollador del motor de lógica booleana

### Responsabilidades

- Implementar el procesamiento de las expresiones lógicas que el sistema acepte.
- Colaborar en la definición de operadores, precedencia, paréntesis y reglas de validación.
- Implementar la simplificación de expresiones y conservar el orden de las transformaciones aplicadas.
- Asociar una explicación comprensible con cada paso de simplificación.
- Manejar casos en los que una expresión no pueda procesarse o ya esté simplificada.
- Verificar que la simplificación y el resultado sean consistentes para las expresiones admitidas.

### Requisitos relacionados

- **RF-01:** ingreso y procesamiento de expresiones, en coordinación con el desarrollador 4.
- **RF-02:** simplificación paso a paso.
- **RF-03:** explicación de cada paso.
- **RNF-03:** consistencia de los resultados.

## Desarrollador 3: Desarrollador de interfaz y experiencia de usuario

### Responsabilidades

- Diseñar e implementar el flujo para que el estudiante ingrese una expresión y solicite su resolución.
- Presentar de manera ordenada la expresión ingresada, los pasos de simplificación, las explicaciones, la tabla de verdad, las compuertas y el resultado.
- Mostrar mensajes claros cuando la expresión esté vacía, tenga formato inválido o aún no se haya procesado.
- Mantener textos, controles y resultados legibles y utilizables en computadoras y dispositivos móviles.
- Consultar con el equipo cómo presentar símbolos y operaciones para que el estudiante los entienda.
- Integrar visualmente los estados de carga, error y resultado con las respuestas del sistema.

### Requisitos relacionados

- Presentación de **RF-01 a RF-06**.
- **RNF-01:** claridad y organización de la resolución.
- **RNF-04:** compatibilidad con navegadores y dispositivos móviles.
- **RNF-05:** legibilidad y accesibilidad.

## Desarrollador 4: Desarrollador de integración y calidad

### Responsabilidades

- Implementar la capa de integración entre la interfaz y el motor de lógica, de acuerdo con los contratos acordados.
- Implementar o integrar la generación de tablas de verdad, la evaluación de resultados y la identificación de compuertas, según la arquitectura definida por el equipo.
- Revisar que los errores del motor se comuniquen correctamente a la interfaz y al estudiante.
- Preparar ejemplos de expresiones válidas e inválidas para comprobar los casos de uso.
- Revisar con el resto del equipo que una expresión produzca resultados coherentes entre simplificación, tabla de verdad y resultado final.
- Participar en la verificación de compatibilidad y del tiempo de respuesta definido en el ERS.
- Documentar defectos encontrados y coordinar su corrección con la persona responsable del módulo.

### Requisitos relacionados

- **RF-04:** generación de tabla de verdad.
- **RF-05:** identificación de compuertas.
- **RF-06:** resultado final.
- **RNF-02:** respuesta en menos de tres segundos bajo condiciones normales, una vez que el equipo defina cómo medirlas.
- Apoyo transversal a **RNF-03** y a los casos de uso **CU-01 a CU-06**.

## Responsabilidades compartidas

- Cada desarrollador revisa y verifica sus propios cambios antes de integrarlos.
- Las reglas matemáticas y los resultados esperados se acuerdan entre los desarrolladores 2 y 4; no se consideran responsabilidad exclusiva de quien integra.
- El desarrollador 3 participa en la definición de símbolos y mensajes desde el inicio para que el sistema sea comprensible para estudiantes.
- El desarrollador 1 facilita acuerdos y seguimiento, pero las decisiones técnicas de cada módulo se toman con la participación de quien lo implementa.
- Los cuatro desarrolladores revisan los casos de uso y comunican cualquier diferencia entre el comportamiento implementado y el ERS.

## Orden sugerido de coordinación

1. Acordar la sintaxis aceptada y el formato común de una expresión y de una respuesta.
2. El desarrollador 2 y el desarrollador 4 implementan sus responsabilidades usando ese formato compartido.
3. El desarrollador 3 avanza la interfaz y conecta los resultados disponibles.
4. El desarrollador 1 coordina las revisiones e integración, y el equipo completo recorre los seis casos de uso.

## Aspectos por confirmar con el equipo

- Nombre de cada desarrollador y experiencia o preferencia técnica.
- Operadores, símbolos y reglas de sintaxis que soportará la primera versión.
- Límite de variables o tamaño de expresión para calcular tablas de verdad.
- Forma de medir el requisito de respuesta menor a tres segundos.
- Descripción detallada de **CU-06**, que aparece en la relación de requisitos y los diagramas, pero no está desarrollada en la sección textual de casos de uso del ERS disponible.

La asignación es una propuesta inicial. El líder puede ajustar responsabilidades según las fortalezas del equipo, manteniendo una persona responsable por cada área y la revisión compartida de los resultados matemáticos.
