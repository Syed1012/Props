import PropTypes from 'prop-types';



function Student(props) {
  return (
    <div>
      <p>Name: {props.Name}</p>
      <p>age: {props.age}</p>
      <p>He is a student: {props.isStudent ? "YES" : "NO"} </p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

Student.defaultProps = {
  Name: "Guest",
  age: 2,
  isStudent: false
}

export default Student;
