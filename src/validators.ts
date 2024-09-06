import { body, query } from "express-validator";

export const validatePostMovimientoAlert = [
    body('ID_ESTADO_EMISOR').isNumeric().withMessage('ID_ESTADO_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_ESTADO_EMISOR no debe exceder 10 caracteres'),
    body('ID_EMISOR').isNumeric().withMessage('ID_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_EMISOR no debe exceder 10 caracteres'),
    body('ID_TIPO_FUENTE').isNumeric().withMessage('ID_TIPO_FUENTE debe ser numérico').isLength({ max: 3 }).withMessage('ID_TIPO_FUENTE no debe exceder 3 caracteres'),
    body('LLAVE').isString().withMessage('LLAVE debe ser una cadena de texto').isLength({ max: 40 }).withMessage('LLAVE no debe exceder 40 caracteres'),
    body('TIPO_OPERACION').isString().withMessage('TIPO_OPERACION debe ser una cadena de texto').isLength({ max: 5 }).withMessage('TIPO_OPERACION no debe exceder 5 caracteres'),
    body('TIPO_INFORMACION').isNumeric().withMessage('TIPO_INFORMACION debe ser numérico').isLength({ max: 10 }).withMessage('TIPO_INFORMACION no debe exceder 10 caracteres'),
    body('FECHA').isISO8601().toDate().withMessage('FECHA debe ser una fecha válida en formato ISO'),
    body('HORA').isString().withMessage('HORA debe ser una cadena de texto').isLength({ max: 5 }).withMessage('HORA no debe exceder 5 caracteres'),
    body('PROCESADO').isNumeric().withMessage('PROCESADO debe ser numérico').isLength({ max: 1 }).withMessage('PROCESADO no debe exceder 1 carácter'),
];

export const validatePatchMovimientoAlert = [
    query('ID_ALTERNA').isNumeric().withMessage('ID_ALTERNA es requerido y debe ser numérico'),
    body('ID_ESTADO_EMISOR').optional().isNumeric().withMessage('ID_ESTADO_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_ESTADO_EMISOR no debe exceder 10 caracteres'),
    body('ID_EMISOR').optional().isNumeric().withMessage('ID_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_EMISOR no debe exceder 10 caracteres'),
    body('ID_TIPO_FUENTE').optional().isNumeric().withMessage('ID_TIPO_FUENTE debe ser numérico').isLength({ max: 3 }).withMessage('ID_TIPO_FUENTE no debe exceder 3 caracteres'),
    body('LLAVE').optional().isString().withMessage('LLAVE debe ser una cadena de texto').isLength({ max: 40 }).withMessage('LLAVE no debe exceder 40 caracteres'),
    body('TIPO_OPERACION').optional().isString().withMessage('TIPO_OPERACION debe ser una cadena de texto').isLength({ max: 5 }).withMessage('TIPO_OPERACION no debe exceder 5 caracteres'),
    body('TIPO_INFORMACION').optional().isNumeric().withMessage('TIPO_INFORMACION debe ser numérico').isLength({ max: 10 }).withMessage('TIPO_INFORMACION no debe exceder 10 caracteres'),
    body('FECHA').optional().isISO8601().withMessage('FECHA debe ser una fecha válida en formato ISO'),
    body('HORA').optional().isString().withMessage('HORA debe ser una cadena de texto').isLength({ max: 5 }).withMessage('HORA no debe exceder 5 caracteres'),
    body('PROCESADO').optional().isNumeric().withMessage('PROCESADO debe ser numérico').isLength({ max: 1 }).withMessage('PROCESADO no debe exceder 1 carácter')
];

export const validatePostAlertVehiculo = [
    body('ID_ESTADO_EMISOR').isNumeric().withMessage('ID_ESTADO_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_ESTADO_EMISOR no debe exceder 10 caracteres'),
    body('ID_EMISOR').isNumeric().withMessage('ID_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_EMISOR no debe exceder 10 caracteres'),
    body('ID_CODIGO_OPER').isNumeric().withMessage('ID_CODIGO_OPER debe ser numérico').isLength({ max: 10 }).withMessage('ID_CODIGO_OPER no debe exceder 10 caracteres'),
    body('PLACA').isString().withMessage('PLACA debe ser una cadena de texto').isLength({ max: 10 }).withMessage('PLACA no debe exceder 10 caracteres'),
    body('FECHA_HORA').isISO8601().withMessage('FECHA_HORA debe ser una fecha válida en formato ISO'),
    body('ESTATUS_REGISTRO').isNumeric().withMessage('ESTATUS_REGISTRO debe ser numérico').isLength({ max: 10 }).withMessage('ESTATUS_REGISTRO no debe exceder 10 caracteres'),
    body('ORIGEN_ALERTA').isNumeric().withMessage('ORIGEN_ALERTA debe ser numérico').isLength({ max: 10 }).withMessage('ORIGEN_ALERTA no debe exceder 10 caracteres'),
    body('TIPO_ESTATUS_REG').isNumeric().withMessage('TIPO_ESTATUS_REG debe ser numérico').isLength({ max: 10 }).withMessage('TIPO_ESTATUS_REG no debe exceder 10 caracteres'),
    body('FECHA_ALTA').isISO8601().withMessage('FECHA_ALTA debe ser una fecha válida en formato ISO'),
    body('VIN').optional().isString().withMessage('VIN debe ser una cadena de texto').isLength({ max: 20 }),
    body('FOLIO_911').optional().isString().withMessage('FOLIO_911 debe ser una cadena de texto').isLength({ max: 20 }),
    body('CARPETA_INV').optional().isString().withMessage('CARPETA_INV debe ser una cadena de texto').isLength({ max: 50 }),
    body('OBSERVACIONES').optional().isString().withMessage('OBSERVACIONES debe ser una cadena de texto').isLength({ max: 200 }),
    body('FOLIO_CARPETA').optional().isString().withMessage('FOLIO_CARPETA debe ser una cadena de texto').isLength({ max: 50 }),
    body('FECHA_ACT').optional().isISO8601().withMessage('FECHA_ACT debe ser una fecha válida en formato ISO'),
    body('CODIGO_CIERRE').optional().isNumeric().withMessage('CODIGO_CIERRE debe ser numérico').isLength({ max: 10 }).withMessage('CODIGO_CIERRE no debe exceder 10 caracteres'),
    body('FECHA_CIERRE').optional().isISO8601().withMessage('FECHA_CIERRE debe ser una fecha váñlida en formato ISO'),
]

export const validatePatchAlertVehiculo = [
    query('ID_ALTERNA').isNumeric().withMessage('ID_ALTERNA debe ser numérico'),
    body('ID_ESTADO_EMISOR').optional().isNumeric().withMessage('ID_ESTADO_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_ESTADO_EMISOR no debe exceder 10 caracteres'),
    body('ID_EMISOR').optional().isNumeric().withMessage('ID_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_EMISOR no debe exceder 10 caracteres'),
    body('ID_CODIGO_OPER').optional().isNumeric().withMessage('ID_CODIGO_OPER debe ser numérico').isLength({ max: 10 }).withMessage('ID_CODIGO_OPER no debe exceder 10 caracteres'),
    body('PLACA').optional().isString().withMessage('PLACA debe ser una cadena de texto').isLength({ max: 10 }).withMessage('PLACA no debe exceder 10 caracteres'),
    body('FECHA_HORA').optional().isISO8601().withMessage('FECHA_HORA debe ser una fecha válida en formato ISO'),
    body('ESTATUS_REGISTRO').optional().isNumeric().withMessage('ESTATUS_REGISTRO debe ser numérico').isLength({ max: 10 }).withMessage('ESTATUS_REGISTRO no debe exceder 10 caracteres'),
    body('ORIGEN_ALERTA').optional().isNumeric().withMessage('ORIGEN_ALERTA debe ser numérico').isLength({ max: 10 }).withMessage('ORIGEN_ALERTA no debe exceder 10 caracteres'),
    body('TIPO_ESTATUS_REG').optional().isNumeric().withMessage('TIPO_ESTATUS_REG debe ser numérico').isLength({ max: 10 }).withMessage('TIPO_ESTATUS_REG no debe exceder 10 caracteres'),
    body('FECHA_ALTA').optional().isISO8601().withMessage('FECHA_ALTA debe ser una fecha válida en formato ISO'),
    body('VIN').optional().isString().withMessage('VIN debe ser una cadena de texto').isLength({ max: 20 }),
    body('FOLIO_911').optional().isString().withMessage('FOLIO_911 debe ser una cadena de texto').isLength({ max: 20 }),
    body('CARPETA_INV').optional().isString().withMessage('CARPETA_INV debe ser una cadena de texto').isLength({ max: 50 }),
    body('OBSERVACIONES').optional().isString().withMessage('OBSERVACIONES debe ser una cadena de texto').isLength({ max: 200 }),
    body('FOLIO_CARPETA').optional().isString().withMessage('FOLIO_CARPETA debe ser una cadena de texto').isLength({ max: 50 }),
    body('FECHA_ACT').optional().isISO8601().withMessage('FECHA_ACT debe ser una fecha válida en formato ISO'),
    body('CODIGO_CIERRE').optional().isNumeric().withMessage('CODIGO_CIERRE debe ser numérico').isLength({ max: 10 }).withMessage('CODIGO_CIERRE no debe exceder 10 caracteres'),
    body('FECHA_CIERRE').optional().isISO8601().withMessage('FECHA_CIERRE debe ser una fecha váñlida en formato ISO'),
]

export const validatePostMovimiento = [
    body('ID_ESTADO_EMISOR').isNumeric().withMessage('ID_ESTADO_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_ESTADO_EMISOR no debe exceder 10 caracteres'),
    body('ID_EMISOR').isNumeric().withMessage('ID_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_EMISOR no debe exceder 10 caracteres'),
    body('ID_TIPO_FUENTE').isNumeric().withMessage('ID_TIPO_FUENTE debe ser numérico').isLength({ max: 3 }).withMessage('ID_TIPO_FUENTE no debe exceder 3 caracteres'),
    body('LLAVE').isString().withMessage('LLAVE debe ser una cadena de texto').isLength({ max: 40 }).withMessage('LLAVE no debe exceder 40 caracteres'),
    body('TIPO_OPERACION').isString().withMessage('TIPO_OPERACION debe ser una cadena de texto').isLength({ max: 10 }).withMessage('TIPO_OPERACION no debe exceder 10 caracteres'),
    body('TIPO_INFORMACION').isNumeric().withMessage('TIPO_INFORMACION debe ser numérico').isLength({ max: 10 }).withMessage('TIPO_INFORMACION no debe exceder 10 caracteres'),
    body('TIPO_ESTATUS_REG').isString().withMessage('TIPO_ESTATUS_REG debe ser una cadena de texto').isLength({ max: 10 }).withMessage('TIPO_ESTATUS_REG no debe exceder 10 caracteres'),
    body('FECHA').isISO8601().withMessage('FECHA debe ser una fecha válida en formato ISO'),
    body('HORA').isString().withMessage('HORA debe ser una cadena de texto').isLength({ max: 5 }).withMessage('HORA no debe exceder 5 caracteres'),
    body('PROCESADO_REPUVE').isNumeric().withMessage('PROCESADO_REPUVE debe ser numérico').isLength({ max: 1 }).withMessage('PROCESADO_REPUVE no debe exceder 1 caracter'),
    body('PROCESADO_VRYR').isNumeric().withMessage('PROCESADO_VRYR debe ser numérico').isLength({ max: 1 }).withMessage('PROCESADO_VRYR no debe exceder 1 caracter'),
]

export const validatePatchMovimiento = [
    query('ID_ALTERNA').isNumeric().withMessage('ID_ALTERNA debe ser numérico'),
    body('ID_ESTADO_EMISOR').optional().isNumeric().withMessage('ID_ESTADO_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_ESTADO_EMISOR no debe exceder 10 caracteres'),
    body('ID_EMISOR').optional().isNumeric().withMessage('ID_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_EMISOR no debe exceder 10 caracteres'),
    body('ID_TIPO_FUENTE').optional().isNumeric().withMessage('ID_TIPO_FUENTE debe ser numérico').isLength({ max: 3 }).withMessage('ID_TIPO_FUENTE no debe exceder 3 caracteres'),
    body('LLAVE').optional().isString().withMessage('LLAVE debe ser una cadena de texto').isLength({ max: 40 }).withMessage('LLAVE no debe exceder 40 caracteres'),
    body('TIPO_OPERACION').optional().isString().withMessage('TIPO_OPERACION debe ser una cadena de texto').isLength({ max: 10 }).withMessage('TIPO_OPERACION no debe exceder 10 caracteres'),
    body('TIPO_INFORMACION').optional().isNumeric().withMessage('TIPO_INFORMACION debe ser numérico').isLength({ max: 10 }).withMessage('TIPO_INFORMACION no debe exceder 10 caracteres'),
    body('TIPO_ESTATUS_REG').optional().isString().withMessage('TIPO_ESTATUS_REG debe ser una cadena de texto').isLength({ max: 10 }).withMessage('TIPO_ESTATUS_REG no debe exceder 10 caracteres'),
    body('FECHA').optional().isISO8601().withMessage('FECHA debe ser una fecha válida en formato ISO'),
    body('HORA').optional().isString().withMessage('HORA debe ser una cadena de texto').isLength({ max: 5 }).withMessage('HORA no debe exceder 5 caracteres'),
    body('PROCESADO_REPUVE').optional().isNumeric().withMessage('PROCESADO_REPUVE debe ser numérico').isLength({ max: 1 }).withMessage('PROCESADO_REPUVE no debe exceder 1 caracter'),
    body('PROCESADO_VRYR').optional().isNumeric().withMessage('PROCESADO_VRYR debe ser numérico').isLength({ max: 1 }).withMessage('PROCESADO_VRYR no debe exceder 1 caracter'),
]

export const validatePostConsultaVehiculo = [
    body('ID_ESTADO_EMISOR').isNumeric().withMessage('ID_ESTADO_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_ESTADO_EMISOR no debe exceder 10 caracteres'),
    body('ID_EMISOR').isNumeric().withMessage('ID_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_EMISOR no debe exceder 10 caracteres'),
    body('PLACA').isString().withMessage('PLACA debe ser una cadena de texto').isLength({ max: 10 }).withMessage('PLACA no debe exceder 10 caracteres'),
    body('FECHA_HORA').isISO8601().withMessage('FECHA_HORA debe ser una fecha válida en formato ISO'),
    body('TIPO_LECTOR').isNumeric().withMessage('TIPO_LECTOR debe ser numérico').isLength({ max: 2 }).withMessage('TIPO_LECTOR no debe exceder 2 caracteres'),
    body('NUMERO_LECTOR').isString().withMessage('NUMERO_LECTOR debe ser una cadena de texto').isLength({ max: 50 }).withMessage('NUMERO_LECTOR no debe exceder 50 caracteres'),
    body('SENTIDO').isNumeric().withMessage('SENTIDO debe ser numérico').isLength({ max: 2 }).withMessage('SENTIDO no debe exceder 2 caracteres'),
    body('VIN').optional().isString().withMessage('VIN debe ser una cadena de texto').isLength({ max: 20 }).withMessage('VIN no debe exceder 20 caracteres'),
    body('FOLIO_RPV').optional().isString().withMessage('FOLIO_RPV debe ser una cadena de texto').isLength({ max: 10 }).withMessage('FOLIO_RPV no debe exceder 10 caracteres'),
    body('LOCALIZACION_LATITUD').optional().isNumeric().withMessage('LOCALIZACION_LATITUD debe ser numérico').isLength({ max: 18.6 }).withMessage('LOCALIZACION_LATITUD no debe exceder 18.6 caracteres'),
    body('LOCALIZACION_LONGITUD').optional().isNumeric().withMessage('LOCALIZACION_LONGITUD debe ser numérico').isLength({ max: 18.6 }).withMessage('LOCALIZACION_LATITUD no debe exceder 18.6 caracteres'),
]

export const validatePatchConsultaVehiculo = [
    query('ID_ALTERNA').isNumeric().withMessage('ID_ALTERNA debe ser numérico'),
    body('ID_ESTADO_EMISOR').optional().isNumeric().withMessage('ID_ESTADO_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_ESTADO_EMISOR no debe exceder 10 caracteres'),
    body('ID_EMISOR').optional().isNumeric().withMessage('ID_EMISOR debe ser numérico').isLength({ max: 10 }).withMessage('ID_EMISOR no debe exceder 10 caracteres'),
    body('PLACA').optional().isString().withMessage('PLACA debe ser una cadena de texto').isLength({ max: 10 }).withMessage('PLACA no debe exceder 10 caracteres'),
    body('FECHA_HORA').optional().isISO8601().withMessage('FECHA_HORA debe ser una fecha válida en formato ISO'),
    body('TIPO_LECTOR').optional().isNumeric().withMessage('TIPO_LECTOR debe ser numérico').isLength({ max: 2 }).withMessage('TIPO_LECTOR no debe exceder 2 caracteres'),
    body('NUMERO_LECTOR').optional().isString().withMessage('NUMERO_LECTOR debe ser una cadena de texto').isLength({ max: 50 }).withMessage('NUMERO_LECTOR no debe exceder 50 caracteres'),
    body('SENTIDO').optional().isNumeric().withMessage('SENTIDO debe ser numérico').isLength({ max: 2 }).withMessage('SENTIDO no debe exceder 2 caracteres'),
    body('VIN').optional().isString().withMessage('VIN debe ser una cadena de texto').isLength({ max: 20 }).withMessage('VIN no debe exceder 20 caracteres'),
    body('FOLIO_RPV').optional().isString().withMessage('FOLIO_RPV debe ser una cadena de texto').isLength({ max: 10 }).withMessage('FOLIO_RPV no debe exceder 10 caracteres'),
    body('LOCALIZACION_LATITUD').optional().isNumeric().withMessage('LOCALIZACION_LATITUD debe ser numérico').isLength({ max: 18.6 }).withMessage('LOCALIZACION_LATITUD no debe exceder 18.6 caracteres'),
    body('LOCALIZACION_LONGITUD').optional().isNumeric().withMessage('LOCALIZACION_LONGITUD debe ser numérico').isLength({ max: 18.6 }).withMessage('LOCALIZACION_LATITUD no debe exceder 18.6 caracteres'),
]
