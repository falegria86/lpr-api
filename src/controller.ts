import { Request, Response } from "express";
import { validationResult } from "express-validator";
import sql, { ConnectionPool } from "mssql";
import { dbConfig } from "./config/dbConfig";
import { getFecha } from "./utils/getDate";
import { getHora } from "./utils/getHora";

export class ApiController {
    private pool: ConnectionPool;

    constructor() {
        this.pool = new sql.ConnectionPool(dbConfig);
        this.pool.connect().catch(error => {
            console.log('Error al conectar a la base de datos: ', error);
        })
    }

    private getIdAlterna = async (tabla: string) => {
        try {
            const resultado = await this.pool.request().query(`SELECT TOP 1 ID_ALTERNA FROM ${tabla} ORDER BY ID_ALTERNA DESC`);
            const { ID_ALTERNA } = resultado.recordset[0];

            return Number(ID_ALTERNA) + 1;
        } catch (error) {
            console.log('Error al obtener id: ', error);
            return null;
        }
    }

    getMovimientos = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM MOVIMIENTOS');
            const movimientos = resultado.recordset;

            if (!movimientos || movimientos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron movimientos'
                });
            }

            return res.status(200).json(movimientos);
        } catch (error) {
            console.log('Error al obtener movimientos: ', error);
            return res.status(500).json({ error: `Error al obtener movimientos: ${error}` });
        }
    }

    getMovimientosAlert = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM MOVIMIENTOS_ALERT');
            const movimientos = resultado.recordset;

            if (!movimientos || movimientos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron movimientos'
                });
            }

            return res.status(200).json(movimientos);
        } catch (error) {
            console.log('Error al obtener movimientos: ', error);
            return res.status(500).json({ error: `Error al obtener movimientos: ${error}` });
        }
    }

    getAlertNacional = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM ALERT_NACIONAL');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    getAlertNacionalByVin = async (req: Request, res: Response) => {
        try {
            const vin = req.query.vin;

            if (!vin) return res.status(400).json({ error: 'VIN es requerido.' });

            const resultado = await this.pool
                .request()
                .input('vin', sql.NVarChar, vin)
                .query('SELECT * FROM ALERT_NACIONAL WHERE VIN = @vin');

            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: `No se encontró vehículo con el VIN ${vin}.`
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener información del vehículo: ', error);
            return res.status(500).json({ error: `Error al obtener información del vehículo: ${error}` });
        }
    }

    getAlertVehiculo = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM ALERT_VEHICULO');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    getAlertVehiculoByVin = async (req: Request, res: Response) => {
        try {
            const vin = req.query.vin;

            if (!vin) return res.status(400).json({ error: 'VIN es requerido.' });

            const resultado = await this.pool
                .request()
                .input('vin', sql.NVarChar, vin)
                .query('SELECT * FROM ALERT_VEHICULO WHERE VIN = @vin');

            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: `No se encontró vehículo con el VIN ${vin}.`
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener información del vehículo: ', error);
            return res.status(500).json({ error: `Error al obtener información del vehículo: ${error}` });
        }
    }

    getCompRobadosNal = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM COMP_VEHI_ROBADO_NAL');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    getCompRobadosNalByVin = async (req: Request, res: Response) => {
        try {
            const vin = req.query.vin;

            if (!vin) return res.status(400).json({ error: 'VIN es requerido.' });

            const resultado = await this.pool
                .request()
                .input('vin', sql.NVarChar, vin)
                .query('SELECT * FROM COMP_VEHI_ROBADO_NAL WHERE VIN = @vin');

            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: `No se encontró vehículo con el VIN ${vin}.`
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener información del vehículo: ', error);
            return res.status(500).json({ error: `Error al obtener información del vehículo: ${error}` });
        }
    }

    getCompRepuveNal = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM COMP_REPUVE_NAL');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    getCompRepuveNalByVin = async (req: Request, res: Response) => {
        try {
            const vin = req.query.vin;

            if (!vin) return res.status(400).json({ error: 'VIN es requerido.' });

            const resultado = await this.pool
                .request()
                .input('vin', sql.NVarChar, vin)
                .query('SELECT * FROM COMP_REPUVE_NAL WHERE VIN = @vin');

            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: `No se encontró vehículo con el VIN ${vin}.`
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener información del vehículo: ', error);
            return res.status(500).json({ error: `Error al obtener información del vehículo: ${error}` });
        }
    }

    getCompRepuve = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM COMPLEMENTO_REPUVE');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    getCompRepuveByVin = async (req: Request, res: Response) => {
        try {
            const vin = req.query.vin;

            if (!vin) return res.status(400).json({ error: 'VIN es requerido.' });

            const resultado = await this.pool
                .request()
                .input('vin', sql.NVarChar, vin)
                .query('SELECT * FROM COMPLEMENTO_REPUVE WHERE VIN = @vin');

            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: `No se encontró vehículo con el VIN ${vin}.`
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener información del vehículo: ', error);
            return res.status(500).json({ error: `Error al obtener información del vehículo: ${error}` });
        }
    }

    getCompRobados = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM COMPLEMENTO_VEHICULO_ROBADO');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    getCompRobadosByVin = async (req: Request, res: Response) => {
        try {
            const vin = req.query.vin;

            if (!vin) return res.status(400).json({ error: 'VIN es requerido.' });

            const resultado = await this.pool
                .request()
                .input('vin', sql.NVarChar, vin)
                .query('SELECT * FROM COMPLEMENTO_VEHICULO_ROBADO WHERE VIN = @vin');

            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: `No se encontró vehículo con el VIN ${vin}.`
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener información del vehículo: ', error);
            return res.status(500).json({ error: `Error al obtener información del vehículo: ${error}` });
        }
    }

    getConsultaVehiculo = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM CONSULTA_VEHICULO');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    getConsultaVehiculoByVin = async (req: Request, res: Response) => {
        try {
            const vin = req.query.vin;

            if (!vin) return res.status(400).json({ error: 'VIN es requerido.' });

            const resultado = await this.pool
                .request()
                .input('vin', sql.NVarChar, vin)
                .query('SELECT * FROM CONSULTA_VEHICULO WHERE VIN = @vin');

            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: `No se encontró vehículo con el VIN ${vin}.`
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener información del vehículo: ', error);
            return res.status(500).json({ error: `Error al obtener información del vehículo: ${error}` });
        }
    }

    getResultadosOpAlert = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM RESULTADO_OP_ALERT');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    getResultadosOpErrorAlert = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM RESULTADO_OP_ERR_ALERT');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    getResultadosOperacion = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM RESULTADO_OPERACION');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    getResultadosOperacionError = async (req: Request, res: Response) => {
        try {
            const resultado = await this.pool.request().query('SELECT * FROM RESULTADO_OPERACION_ERROR');
            const vehiculos = resultado.recordset;

            if (!vehiculos || vehiculos.length <= 0) {
                return res.status(404).json({
                    error: 'No se encontraron vehículos.'
                });
            }

            return res.status(200).json(vehiculos);
        } catch (error) {
            console.log('Error al obtener vehículos: ', error);
            return res.status(500).json({ error: `Error al obtener vehículos: ${error}` });
        }
    }

    postMovimientoAlert = async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const ID_ALTERNA = await this.getIdAlterna('MOVIMIENTOS_ALERT');
        if (!ID_ALTERNA) {
            console.log('Error al obtener ID.');
            return res.status(500).json({ error: `Error al obtener ID.` });
        }

        const LLAVE = `18-19-${ID_ALTERNA}`;
        const FECHA = getFecha();
        const HORA = getHora();

        const { ID_ESTADO_EMISOR, ID_EMISOR, ID_TIPO_FUENTE, TIPO_OPERACION, TIPO_INFORMACION, PROCESADO } = req.body;

        try {
            await this.pool.request()
                .input('ID_ALTERNA', sql.Numeric, ID_ALTERNA)
                .input('ID_ESTADO_EMISOR', sql.Numeric, ID_ESTADO_EMISOR)
                .input('ID_EMISOR', sql.Numeric, ID_EMISOR)
                .input('ID_TIPO_FUENTE', sql.Numeric, ID_TIPO_FUENTE)
                .input('LLAVE', sql.NVarChar, LLAVE)
                .input('TIPO_OPERACION', sql.NVarChar, TIPO_OPERACION)
                .input('TIPO_INFORMACION', sql.Numeric, TIPO_INFORMACION)
                .input('FECHA', sql.Date, FECHA)
                .input('HORA', sql.NVarChar, HORA)
                .input('PROCESADO', sql.Numeric, PROCESADO)
                .query(`
                    INSERT INTO MOVIMIENTOS_ALERT (ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, ID_TIPO_FUENTE, LLAVE, TIPO_OPERACION, TIPO_INFORMACION, FECHA, HORA, PROCESADO)
                    VALUES (@ID_ALTERNA, @ID_ESTADO_EMISOR, @ID_EMISOR, @ID_TIPO_FUENTE, @LLAVE, @TIPO_OPERACION, @TIPO_INFORMACION, @FECHA, @HORA, @PROCESADO)
                `);

            return res.status(201).json({ ...req.body, LLAVE, FECHA, HORA });
        } catch (error) {
            console.log('Error al insertar movimiento alert: ', error);
            return res.status(500).json({ error: `Error al insertar movimiento alert: ${error}` });
        }
    }

    patchMovimientoAlert = async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { ID_ALTERNA } = req.query;

        let fieldsToUpdate = [];
        const request = this.pool.request();

        const camposPermitidos = [
            'ID_ESTADO_EMISOR', 'ID_EMISOR', 'ID_TIPO_FUENTE', 'LLAVE', 'TIPO_OPERACION',
            'TIPO_INFORMACION', 'FECHA', 'HORA', 'PROCESADO'
        ];

        for (const field of camposPermitidos) {
            const value = req.body[field];
            if (value !== undefined) {
                fieldsToUpdate.push(`${field} = @${field}`);
                request.input(field, typeof value === "number" ? sql.Numeric : sql.NVarChar, value);
            }
        }

        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
        }

        request.input('ID_ALTERNA', sql.Numeric, ID_ALTERNA);

        const query = `
            UPDATE MOVIMIENTOS_ALERT
            SET ${fieldsToUpdate.join(', ')}
            WHERE ID_ALTERNA = @ID_ALTERNA
        `;

        try {
            const resultado = await request.query(query);
            if (resultado.rowsAffected[0] === 0) {
                return res.status(404).json({ error: `No se encontró un registro con ID_ALTERNA ${ID_ALTERNA}.` });
            }

            return res.status(200).json(req.body);
        } catch (error) {
            console.log('Error al actualizar movimiento alert: ', error);
            return res.status(500).json({ error: `Error al actualizar movimiento alert: ${error}` });
        }
    }

    postAlertVehiculo = async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const ID_ALTERNA = await this.getIdAlterna('ALERT_VEHICULO');
        if (!ID_ALTERNA) {
            console.log('Error al obtener ID.');
            return res.status(500).json({ error: `Error al obtener ID.` });
        }

        const FECHA_ALTA = getFecha();

        const datos: any = {
            ID_ALTERNA,
            ID_ESTADO_EMISOR: req.body.ID_ESTADO_EMISOR,
            ID_EMISOR: req.body.ID_EMISOR,
            ID_CODIGO_OPER: req.body.ID_CODIGO_OPER,
            PLACA: req.body.PLACA,
            FECHA_HORA: new Date().toISOString(),
            ESTATUS_REGISTRO: req.body.ESTATUS_REGISTRO,
            ORIGEN_ALERTA: req.body.ORIGEN_ALERTA,
            TIPO_ESTATUS_REG: req.body.TIPO_ESTATUS_REG,
            FECHA_ALTA,
            VIN: req.body.VIN || null,
            FOLIO_911: req.body.FOLIO_911 || null,
            CARPETA_INV: req.body.CARPETA_INV || null,
            OBSERVACIONES: req.body.OBSERVACIONES || null,
            FOLIO_CARPETA: req.body.FOLIO_CARPETA || null,
            FECHA_ACT: null,
            CODIGO_CIERRE: null,
            FECHA_CIERRE: null
        };

        try {
            const request = this.pool.request();

            for (const [field, value] of Object.entries(datos)) {
                request.input(field, value === null ? sql.NVarChar : (typeof value === "number" ? sql.Numeric : sql.NVarChar), value);
            }

            const query = `
            INSERT INTO ALERT_VEHICULO (${Object.keys(datos).join(', ')})
            VALUES (${Object.keys(datos).map(field => `@${field}`).join(', ')})
            `;

            await request.query(query);

            return res.status(201).json(datos);
        } catch (error) {
            return res.status(500).json({ error: `Error al insertar alerta de vehículo: ${error}` });
        }
    }

    patchAlertVehiculo = async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { ID_ALTERNA } = req.query;

        let fieldsToUpdate = [];
        const request = this.pool.request();

        const camposPermitidos = [
            'ID_ESTADO_EMISOR',
            'ID_EMISOR',
            'ID_CODIGO_OPER',
            'PLACA',
            'FECHA_HORA',
            'ESTATUS_REGISTRO',
            'ORIGEN_ALERTA',
            'TIPO_ESTATUS_REG',
            'VIN',
            'FOLIO_911',
            'CARPETA_INV',
            'OBSERVACIONES',
            'FOLIO_CARPETA',
            'CODIGO_CIERRE',
            'FECHA_CIERRE',
        ];

        for (const field of camposPermitidos) {
            const value = req.body[field];

            if (value !== undefined) {
                fieldsToUpdate.push(`${field} = @${field}`);
                request.input(field, typeof value === "number" ? sql.Numeric : sql.NVarChar, value);
            }
        }

        const FECHA_ACT = new Date().toISOString();
        request.input('FECHA_ACT', sql.Date, FECHA_ACT);

        fieldsToUpdate.push(`FECHA_ACT = @FECHA_ACT`);

        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
        }

        request.input('ID_ALTERNA', sql.Numeric, ID_ALTERNA);

        const query = `
            UPDATE ALERT_VEHICULO
            SET ${fieldsToUpdate.join(', ')}
            WHERE ID_ALTERNA = @ID_ALTERNA
        `;

        try {
            const resultado = await request.query(query);
            if (resultado.rowsAffected[0] === 0) {
                return res.status(404).json({ error: `No se encontró un registro con ID_ALTERNA ${ID_ALTERNA}.` });
            }

            return res.status(200).json(req.body);
        } catch (error) {
            console.log('Error al actualizar movimiento alert: ', error);
            return res.status(500).json({ error: `Error al actualizar movimiento alert: ${error}` });
        }
    }

    postMovimiento = async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const ID_ALTERNA = await this.getIdAlterna('MOVIMIENTOS');
        if (!ID_ALTERNA) {
            console.log('Error al obtener ID.');
            return res.status(500).json({ error: `Error al obtener ID.` });
        }

        const LLAVE = `18-19-${ID_ALTERNA}`;
        const FECHA = getFecha();
        const HORA = getHora();

        const {
            ID_ESTADO_EMISOR,
            ID_EMISOR,
            ID_TIPO_FUENTE,
            TIPO_OPERACION,
            TIPO_INFORMACION,
            TIPO_ESTATUS_REG,
            PROCESADO_REPUVE,
            PROCESADO_VRYR,
        } = req.body;

        try {
            await this.pool.request()
                .input('ID_ALTERNA', sql.Numeric, ID_ALTERNA)
                .input('ID_ESTADO_EMISOR', sql.Numeric, ID_ESTADO_EMISOR)
                .input('ID_EMISOR', sql.Numeric, ID_EMISOR)
                .input('ID_TIPO_FUENTE', sql.Numeric, ID_TIPO_FUENTE)
                .input('LLAVE', sql.NVarChar, LLAVE)
                .input('TIPO_OPERACION', sql.NVarChar, TIPO_OPERACION)
                .input('TIPO_INFORMACION', sql.Numeric, TIPO_INFORMACION)
                .input('TIPO_ESTATUS_REG', sql.NVarChar, TIPO_ESTATUS_REG)
                .input('FECHA', sql.Date, FECHA)
                .input('HORA', sql.NVarChar, HORA)
                .input('PROCESADO_REPUVE', sql.Numeric, PROCESADO_REPUVE)
                .input('PROCESADO_VRYR', sql.Numeric, PROCESADO_VRYR)
                .query(`
                    INSERT INTO MOVIMIENTOS (ID_ALTERNA, ID_ESTADO_EMISOR, ID_EMISOR, ID_TIPO_FUENTE, LLAVE, TIPO_OPERACION, TIPO_INFORMACION, TIPO_ESTATUS_REG, FECHA, HORA, PROCESADO_REPUVE, PROCESADO_VRYR)
                    VALUES (@ID_ALTERNA, @ID_ESTADO_EMISOR, @ID_EMISOR, @ID_TIPO_FUENTE, @LLAVE, @TIPO_OPERACION, @TIPO_INFORMACION, @TIPO_ESTATUS_REG, @FECHA, @HORA, @PROCESADO_REPUVE, @PROCESADO_VRYR)
                `);

            return res.status(201).json({...req.body, LLAVE, FECHA, HORA});
        } catch (error) {
            console.log(`Error al insertar movimiento: ${error}`);
            return res.status(500).json({ error: `Error al insertar movimiento: ${error}` })
        }
    }

    patchMovimiento = async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { ID_ALTERNA } = req.query;

        let fieldsToUpdate = [];
        const request = this.pool.request();

        const camposPermitidos = [
            "ID_ALTERNA",
            "ID_ESTADO_EMISOR",
            "ID_EMISOR",
            "ID_TIPO_FUENTE",
            "LLAVE",
            "TIPO_OPERACION",
            "TIPO_INFORMACION",
            "TIPO_ESTATUS_REG",
            "FECHA",
            "HORA",
            "PROCESADO_REPUVE",
            "PROCESADO_VRYR",
        ];

        for (const field of camposPermitidos) {
            const value = req.body[field];
            if (value !== undefined) {
                fieldsToUpdate.push(`${field} = @${field}`);
                request.input(field, typeof value === "number" ? sql.Numeric : sql.NVarChar, value);
            }
        }

        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
        }

        request.input('ID_ALTERNA', sql.Numeric, ID_ALTERNA);

        const query = `
            UPDATE MOVIMIENTOS
            SET ${fieldsToUpdate.join(', ')}
            WHERE ID_ALTERNA = @ID_ALTERNA
        `;

        try {
            const resultado = await request.query(query);
            if (resultado.rowsAffected[0] === 0) {
                return res.status(404).json({ error: `No se encontró un registro con ID_ALTERNA ${ID_ALTERNA}.` });
            }

            return res.status(200).json(req.body);
        } catch (error) {
            console.log('Error al actualizar movimiento: ', error);
            return res.status(500).json({ error: `Error al actualizar movimiento: ${error}` });
        }
    }

    postConsultaVehiculo = async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const ID_ALTERNA = await this.getIdAlterna('CONSULTA_VEHICULO');
        if (!ID_ALTERNA) {
            console.log('Error al obtener ID.');
            return res.status(500).json({ error: `Error al obtener ID.` });
        }

        const datos: any = {
            ID_ALTERNA,
            ID_ESTADO_EMISOR: req.body.ID_ESTADO_EMISOR,
            ID_EMISOR: req.body.ID_EMISOR,
            PLACA: req.body.PLACA,
            FECHA_HORA: new Date().toISOString(),
            TIPO_LECTOR: req.body.TIPO_LECTOR,
            NUMERO_LECTOR: req.body.NUMERO_LECTOR,
            SENTIDO: req.body.SENTIDO,
            VIN: req.body.VIN || null,
            FOLIO_RPV: req.body.FOLIO_RPV || null,
            LOCALIZACION_LATITUD: req.body.LOCALIZACION_LATITUD || null,
            LOCALIZACION_LONGITUD: req.body.LOCALIZACION_LONGITUD || null,
        };

        try {
            const request = this.pool.request();

            for (const [field, value] of Object.entries(datos)) {
                request.input(field, value === null ? sql.NVarChar : (typeof value === "number" ? sql.Numeric : sql.NVarChar), value);
            }

            const query = `
            INSERT INTO CONSULTA_VEHICULO (${Object.keys(datos).join(', ')})
            VALUES (${Object.keys(datos).map(field => `@${field}`).join(', ')})
            `;

            await request.query(query);

            return res.status(201).json(datos);
        } catch (error) {
            return res.status(500).json({ error: `Error al insertar consulta de vehículo: ${error}` });
        }
    }

    patchConsultaVehiculo = async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { ID_ALTERNA } = req.query;

        let fieldsToUpdate = [];
        const request = this.pool.request();

        const camposPermitidos = [
            'ID_ALTERNA',
            'ID_ESTADO_EMISOR',
            'ID_EMISOR',
            'PLACA',
            'FECHA_HORA',
            'TIPO_LECTOR',
            'NUMERO_LECTOR',
            'SENTIDO',
            'VIN',
            'FOLIO_RPV',
            'LOCALIZACION_LATITUD',
            'LOCALIZACION_LONGITUD',
        ];

        for (const field of camposPermitidos) {
            const value = req.body[field];

            if (value !== undefined) {
                fieldsToUpdate.push(`${field} = @${field}`);
                request.input(field, typeof value === "number" ? sql.Numeric : sql.NVarChar, value);
            }
        }

        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ error: 'No se proporcionaron campos para actualizar.' });
        }

        request.input('ID_ALTERNA', sql.Numeric, ID_ALTERNA);

        const query = `
            UPDATE CONSULTA_VEHICULO
            SET ${fieldsToUpdate.join(', ')}
            WHERE ID_ALTERNA = @ID_ALTERNA
        `;

        try {
            const resultado = await request.query(query);
            if (resultado.rowsAffected[0] === 0) {
                return res.status(404).json({ error: `No se encontró un registro con ID_ALTERNA ${ID_ALTERNA}.` });
            }

            return res.status(200).json(req.body);
        } catch (error) {
            console.log('Error al actualizar movimiento alert: ', error);
            return res.status(500).json({ error: `Error al actualizar consulta de vehículo: ${error}` });
        }
    }
}