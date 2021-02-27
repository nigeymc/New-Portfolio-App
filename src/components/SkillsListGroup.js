import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SkillsListGroup = (props) => (
    <ListGroup as="ul">
        <h4>{props.groupTitle}</h4>
        {props.skillsValues.map((val) =>
            <ListGroup.Item as="li" key={val}>{val}</ListGroup.Item>
        )}
    </ListGroup>

);

export { SkillsListGroup as default };

