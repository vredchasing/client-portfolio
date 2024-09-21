import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const AllProjects = forwardRef(({ array }, ref) => {

    function CreateProject ({project, index}){
        return (
            <div className="all-projects-slide-wrapper">
                <div className="all-projects-slide-left">
                    <div className="all-projects-slide-img-container">
                        <img className="all-projects-slide-img" src={project.img}></img>
                    </div>
                </div>
                <div className="all-projects-slide-center">
                    <div className="all-projects-slide-title-container">
                        <h1 className="all-projects-slide-title">{project.name}</h1>
                    </div>
                    <div className="all-projects-slide-description-container">
                        <h1 className="all-projects-slide-description">{project.description}</h1>
                    </div>
                </div>
                <div className="all-projects-slide-right">
                    <div className="all-projects-slide-view-more-container">
                        <button className="all-projects-slide-view-more-button">VIEW MORE</button>
                    </div>
                </div>
            </div>
        )
    }

    const [searchInput, setSearchInput] = useState('')
    const [filteredArray, setFilteredArray] = useState(array)

    const inputOnChange = (e)=>{
        const value = e.target.value
        setSearchInput(value)
        console.log(searchInput)
    }
    function searchFeature (){
        const searchInputModified = searchInput.toLowerCase().trim()
        if(searchInputModified===''){
            setFilteredArray(array)
        }
        else{
            let searchResults = array.filter(project=>{
                return project.name.toLowerCase().includes(searchInputModified)
            })
            console.log('search results', searchResults)
            setFilteredArray(searchResults)
        }
    }

    useEffect(()=>{
        searchFeature()
    }, [searchInput])

    const backButtonRef = useRef()
    const setBackButtonRef = (el)=>{
        if(el){
            backButtonRef.current = el
        }
    }
    useImperativeHandle(ref, ()=>({
        backButtonRef: backButtonRef.current
    }));

    return(
        <section className="all-projects-content">
            <div className="all-projects-header">
                <div className="all-projects-back-button-wrapper">
                    <button className="all-projects-back-button" ref={setBackButtonRef}>BACK</button>
                </div>
                <div className="all-projects-search-container">
                    <img className="projects-search-icon" src="search-icon.svg"></img>
                    <input className="all-projects-searchbar" onChange={inputOnChange} placeholder="Search" ref={ref}></input>
                </div>
            </div>
            <section className="all-projects-slider">
                {filteredArray.map((project, index)=>{
                    return(
                        <CreateProject key={index} project={project} index={index}></CreateProject>
                    )
                })}
            </section>
        </section>
        
    )
})

export default AllProjects;
