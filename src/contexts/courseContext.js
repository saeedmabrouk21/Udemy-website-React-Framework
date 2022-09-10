import React from "react";

export const courseContext = React.createContext();

const CourseProvider = courseContext.Provider;
const CourseConsumer = courseContext.Consumer;

export { CourseProvider ,CourseConsumer};
