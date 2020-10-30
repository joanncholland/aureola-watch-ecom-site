import React, { Component } from 'react'
import { WatchConsumer } from '../context'
import Watch from './Watch'
import Title from './Title'

export default class Shop extends Component {
    render() {
        return (
            <div className="pb-5">
                <Title title="What's Your Sign?" />
                <div className="container p-5">
                    <div className="row">
                <WatchConsumer>
                    {(value) => {
                        return value.watchCollection.map((watch) => {
                            return <Watch key={watch.id} watch={watch} />;
                        });
                    }}
                </WatchConsumer>
                    </div>
                </div>
                
            </div>
        )
    }
}
