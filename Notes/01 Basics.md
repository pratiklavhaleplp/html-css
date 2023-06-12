- **Priorites**
  - Declarations marked with ! > Inline > Id > Class > Element > Universal
- **Inheritance**
  - If you have specified someting in the parent let's say color then child will difinately going to over ride it.
- Height of a content = content + padding of both top and bottom
- width of a content = content + padding of both left and right
- display: inline-block;
  - you will have block like properties to inline-block elements they will have horizontal and vertical hights or you can say that width property does not have any effect on inline elements.
- **Positioning**
  - relative
    - by **default we have position set to relative** which shows how that the web page should flow accordingly to the source code. Like the way it appears on the HTML document.
  - absolute
    - you have to make the parent positioning as relative then use this positioning. check the Get detials button how we have managed to move it to the end-corner of container.
- **Pseudo-elements-selector**
  - ```
      h1::first-letter{
      with :: you are able to selected the element pseudo selector.
    }
    ```
