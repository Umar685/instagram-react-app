import React from 'react';
import SimpleCard from "../SimpleCard";
import './SimpleCardList.scss';

class SimpleCardList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let data = [
            {
                main_text: "Swag",
                description: "Beauty With Swag"
            },
            {
                main_text: "Beauty",
                description: "Beauty With Swag Level 0"
            },
            {
                main_text: "Girl",
                description: "Beauty With Swag Level high"
            },
            {
                main_text: "Lady",
                description: "Beauty With Swag heavy"
            },
            {
                main_text: "Aunty",
                description: "Beauty With Swag"
            },
            {
                main_text: "Swag",
                description: "Beauty With Swag"
            },
            {
                main_text: "Girl",
                description: "Beauty With Swag Level high"
            },
            {
                main_text: "Lady",
                description: "Beauty With Swag heavy"
            },
            {
                main_text: "Aunty",
                description: "Beauty With Swag"
            },
            {
                main_text: "Swag",
                description: "Beauty With Swag"
            }

        ]

        return <div className="simple-cards-list">
            {
                data.map(cardData => <SimpleCard
                    main_text={cardData.main_text} description={cardData.description}
                />)
            }
        </div>
    }
}

export default SimpleCardList;