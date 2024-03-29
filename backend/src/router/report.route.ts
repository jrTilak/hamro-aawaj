import { Router } from "express";
import ReportController from "../controllers/ReportController";

const ReportRouter = Router();

ReportRouter.post("/post", ReportController.ReportPost);
ReportRouter.get("/fetchAll", ReportController.FetchReports);
ReportRouter.get("/fetchwithoutlabel", ReportController.FetchReportWithoutLabel);
ReportRouter.put("/updateLabel", ReportController.UpdateLabel);
ReportRouter.put("/compeleteReport", ReportController.isCompleted);
ReportRouter.post("/comment", ReportController.Comment);
ReportRouter.get("/id/:id", ReportController.getReportById);
ReportRouter.get("/comments/:reportId", ReportController.fetchComments);
ReportRouter.post("/vote", ReportController.vote);
ReportRouter.get("/searchByFilter", ReportController.searchByFilter);
ReportRouter.get("/notCompletedReports", ReportController.notCompletedReports);
ReportRouter.get("/userReports/:userId", ReportController.getUserPersonalReports);
ReportRouter.get("/rankUsers", ReportController.rankUsers);
export default ReportRouter;
