import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService"

export function createCourse(request: Request, response: Response) {

  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Victor",
    duration: 10
  });

  CreateCourseService.execute({
    name: "ReactJS",
    educator: "Victor",
  });

  return response.send();
};