function projectSliderAnimation(){
    const elements = document.getElementsByClassName('project-slide-img-container')
    let rect1 = elements[0].getBoundingClientRect()
    let rect2 = elements[elements.length-1].getBoundingClientRect()
    let margin = calculateSliderPosition()
    console.log(margin)
    let percetage = calculateProjectPercentage()
    if(window.scrollY>=(projectsWrapperOffset.current-(viewportHeight/2))){
        projectSliderRef.current.style.transform = `translateX(-${percetage*0.2}%)`
        projectImagesRef.current.forEach((project)=>{
            project.ref.style.transform = `translateX(-${percetage*project.animateSpeed}vw)`
        })
    }

}













function introTextAnimation(){
    let midline = viewportHeight/2;
    let percentage = window.scrollY/viewportHeight

    //translation logic

    if(window.scrollY>=lastScroll){

    }
    if(window.scrollY<=lastScroll){

    }
}











