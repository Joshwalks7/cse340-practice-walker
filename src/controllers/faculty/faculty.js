import { getFacultyById, getSortedFaculty } from "../../models/faculty/faculty.js";

const facultyListPage = (req, res) => {
    const sort = req.query.sort || "name";
    const facultyList = getSortedFaculty(sort);

    res.render("faculty/list", {
        title: "Faculty Directory",
        faculty: facultyList,
        currentSort: sort
    })
}

const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const faculty = getFacultyById(facultyId);

    // check if the faculty member exists
    if (!faculty) {
        const err = new Error(`${facultyId} not found`);
        err.status = 404;
        return next(err);
    }

    res.render("faculty/detail", {
        title: faculty.name,
        faculty: faculty 
    })
}

export { facultyListPage, facultyDetailPage };