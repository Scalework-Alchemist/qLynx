import React, { Component } from "react";
import StickyNote from "../../components/StickyNote";


class Diy001 extends Component {
  render(props) {
    return (
      <main>
        <div className="top">
          <p>
            this page is going to be the page where the sale is really made..
            you need to really make a good assement of what needs to be on the
            page lets start with a list of requirements make it... shorter the
            better. this is the about page cool since this is the container you
            should make it a class just in case you need to dummy test your code
            then we can make it a bit more complicated if it needs to be maybe
            it can be simpler but at the moment i feel that these main pages
            should contain state or have the capabilty to fire off actions or
            have some webhooks for tag management
          </p>
          <p>so heres the things i want this page to do.</p>
          <ul>
            <li>display some type of text</li>
            <li>display the local time and maybe in that language</li>
            <li>explain the building of this page</li>
          </ul>
        </div>
        <div className="middle">
          <p>
            i want to show you how to make a this sticky note and have it
            display text. so i already know that this app is going to be a
            container of many smaller "tools" or how we call it in the react
            world components. for our sanity we are going to seperate the
            concerns of this app by into the atomic level. meaning each item
            that can represented by its simplest definition.
          </p>
          <p>
            This is the note component its going to be an text input box. it
            should take an input and send that data off to an a database. off
            the bat i already dont want this page
          </p>
        </div>
        <StickyNote backgroundColor='blue'/>
      </main>
    );
  }
}

export default Diy001;
