import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.courseId);
  };
  return (
    <li onClick={deleteHandler}>
      <p className="course_items">{props.course}</p>
    </li>
  );
};

export default CourseGoalItem;
