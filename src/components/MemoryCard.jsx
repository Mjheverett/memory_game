import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {
    render () {
        const memoryCardInnerClass = this.props.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner";
        
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"></img>
                    </div>
                    <div className="MemoryCardFront">
                        <div>{this.props.symbol}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;