import { Router } from "express";
import ReportController from "../controllers/ReportController";

const ReportRouter = Router();

ReportRouter.post(
    "/post",
    ReportController.ReportPost
);
ReportRouter.get("/fetchAll", ReportController.FetchReports);
ReportRouter.get("/fetchwithoutlabel", ReportController.FetchReportWithoutLabel);
ReportRouter.put("/updateLabel", ReportController.UpdateLabel);


export default ReportRouter;