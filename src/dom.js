

const domManagament = (function(){

    const domButton = function(nameID, className, innerHtml){

        const button = document.createElement('button');
        button.id = nameID;
        button.className = className
        button.innerHTML = innerHtml;

        return button;
    }

    const domParagraph = function(nameID, content){
        const paragraph = document.createElement('p');
        paragraph.id = nameID;
        paragraph.innerHTML = content;

        return paragraph;
    }

    const domH1 = function(nameID, content){
        const heading1 = document.createElement('h1');
        heading1.id = nameID;
        heading1.innerHTML = content;

        return heading1;
    }

    const domH2 = function(nameID, content){
        const heading2 = document.createElement('h2');
        heading2.id = nameID;
        heading2.innerHTML = content;

        return heading2;
    }

    const domImage = function(nameID, srcImage){
        const img = document.createElement('img');

        img.id = nameID;
        img.src = srcImage;

        return img;
    }

    const domAnchor = function(nameID, content, hrefPage){
        const anchor = document.createElement('a');

        anchor.id = nameID;
        anchor.href = hrefPage;
        anchor.innerHTML = content;

        return anchor;
    }
    return{
        domButton,
        domImage,
        domParagraph,
        domH1,
        domH2,
        domAnchor,
    }
})();


export default domManagament;