import { Button } from "components/components.styled";
import { ContactItem } from "./FiltredContatcs.styled";
import PropTypes from 'prop-types';


export const FiltredContacts = ({ name, phone, onDelete, id }) => {
    return (
        <ContactItem>
            {name}: {phone}
            <Button type="button" onClick={()=>onDelete(id)}>
                Delete
            </Button>
        </ContactItem>
    )
};

FiltredContacts.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.node.isRequired,
    onDelete: PropTypes.func.isRequired,
};

