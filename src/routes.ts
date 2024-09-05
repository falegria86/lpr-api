import { Router } from "express";
import { ApiController } from "./controller";
import {
    validatePatchAlertVehiculo,
    validatePatchConsultaVehiculo,
    validatePatchMovimiento,
    validatePatchMovimientoAlert,
    validatePostAlertVehiculo,
    validatePostConsultaVehiculo,
    validatePostMovimiento,
    validatePostMovimientoAlert,
} from "./validators";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();
        const apiController = new ApiController();

        router.get('/api/getMovimientos', apiController.getMovimientos);
        router.get('/api/getMovimientosAlert', apiController.getMovimientosAlert);
        router.get('/api/getAlertNacional', apiController.getAlertNacional);
        router.get('/api/getAlertNacionalByVin', apiController.getAlertNacionalByVin);
        router.get('/api/getAlertVehiculo', apiController.getAlertVehiculo);
        router.get('/api/getAlertVehiculoByVin', apiController.getAlertVehiculoByVin);
        router.get('/api/getCompRobadosNal', apiController.getCompRobadosNal);
        router.get('/api/getCompRobadosNalByVin', apiController.getCompRobadosNalByVin);
        router.get('/api/getCompRepuve', apiController.getCompRepuve);
        router.get('/api/getCompRepuveByVin', apiController.getCompRepuveByVin);
        router.get('/api/getCompRepuveNal', apiController.getCompRepuveNal);
        router.get('/api/getCompRepuveNalByVin', apiController.getCompRepuveNalByVin);
        router.get('/api/getCompRobados', apiController.getCompRobados);
        router.get('/api/getCompRobadosByVin', apiController.getCompRobadosByVin);
        router.get('/api/getConsultaVehiculo', apiController.getConsultaVehiculo);
        router.get('/api/getConsultaVehiculoByVin', apiController.getConsultaVehiculoByVin);
        router.get('/api/getResultadosOpAlert', apiController.getResultadosOpAlert);
        router.get('/api/getResultadosOpErrorAlert', apiController.getResultadosOpErrorAlert);
        router.get('/api/getResultadosOperacion', apiController.getResultadosOperacion);
        router.get('/api/getResultadosOperacionError', apiController.getResultadosOperacionError);
        router.post('/api/postMovimientoAlert', validatePostMovimientoAlert, apiController.postMovimientoAlert);
        router.patch('/api/patchMovimientoAlert', validatePatchMovimientoAlert, apiController.patchMovimientoAlert);
        router.post('/api/postAlertVehiculo', validatePostAlertVehiculo, apiController.postAlertVehiculo);
        router.patch('/api/patchAlertVehiculo', validatePatchAlertVehiculo, apiController.patchAlertVehiculo);
        router.post('/api/postMovimiento', validatePostMovimiento, apiController.postMovimiento);
        router.patch('/api/patchMovimiento', validatePatchMovimiento, apiController.patchMovimiento);
        router.post('/api/postConsultaVehiculo', validatePostConsultaVehiculo, apiController.postConsultaVehiculo);
        router.patch('/api/patchConsultaVehiculo', validatePatchConsultaVehiculo, apiController.patchConsultaVehiculo);

        return router;
    }
}