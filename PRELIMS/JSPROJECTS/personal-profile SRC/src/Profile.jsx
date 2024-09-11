import PropTypes from 'prop-types'
export default function Profile(props){ //props-to pass information to functional components; usually arguments or parameters
    return(
        <div className="person">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJC-MTmBvvdxABAhLhE9RMYWKnChMDuR2XV3_tqdzyHImeDaxL" alt="My-profile-picture" className="profile-picture" />
            <p>This is <strong>{props.name}'s</strong> main hobby: <strong>{props.hobby}</strong></p>
            <p>This is <strong>{props.name}'s</strong> favorite food: </p>
            <p>{(props.food).toUpperCase()}</p>
            <p>What course is he in? <strong>{props.course}</strong></p>
            <p>Is his course relevant in this day and age? <strong>{props.isCourseRelevant? "Yes" : "No"}</strong></p>
            <p>{props.name} is <strong>{props.age}</strong> years old!</p>
        </div>
    )
}
Profile.defaultProps = {
    name:"Guest",
    hobby:"Unknown",
    food:"Unknown",
    course: "Unknown",
    isCourseRelevant: true,
    age: 18
}
Profile.PropTypes = {
    name: PropTypes.string,
    hobby: PropTypes.string,
    food: PropTypes.string,
    course: PropTypes.string,
    isCourseRelevant: PropTypes.bool,
    age: PropTypes.number
}