import { useEffect, useState } from 'react';
import GhCard from "../UI/GhCard"

const ProjectsList = () => {
    const [repoList, setRepoList] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users/evescolded/repos?sort=created&direction=desc").then( async response => {

        const repos = await response.json();

        const mappedRepos = repos.map(project => { 
            return {
          name: project.name,
          description: project.description,
          html_url: project.html_url,
          homepage: project.homepage,
          fork: project.fork,
        }})  

        setRepoList(mappedRepos.filter(repo => repo.fork == false));
        });
    }, []);


    return (
        repoList.map(repo =>
        <GhCard name={repo.name} description={repo.description} html_url={repo.html_url} homepage={repo.homepage} />
        )
        )
}

export default ProjectsList;
