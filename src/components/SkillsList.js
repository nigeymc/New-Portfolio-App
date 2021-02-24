import React, { Fragment } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import SkillsGroups from "./SkillsGroups";

const SkillsListFilters = (props) => {

    return (
        <Fragment>
            <h3>My Engineering & Design Skills</h3>
            <div className="input-group">
                <div className="input-group__item">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        Search
                    </Form.Label>
                    <Form.Control
                        type="text"
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Search skills list"
                        value={props.searchTerm}
                        onChange={props.handleChange}
                    />
                </div>
            </div>

            <div className="skillsGroups mt-5">
                {!props.searchTerm
                    ? <SkillsGroups />
                    : <ListGroup as="ul">{props.filter.map(skill => (
                        <ListGroup.Item as="li" key={skill}>{skill}</ListGroup.Item>
                    ))} </ListGroup>
                }
            </div>

        </Fragment>

    )
}



export { SkillsListFilters as default };