---
title: "Master's Thesis: Metadata Capture, Knowledge Extraction, and Predictive Analysis for HPC Workflows" 
date: February 20, 2026
summary: "Let's explore what happens when a researcher submits a job to an HPC environment. How can we improve research methodology and collaboration?"
visible: true
---

During the last months, I have been working on this important project, which allowed me to complete the Master's Degree. 
This post, the first in a short series, presents the problem context and the high-level goals. The idea of these posts is to document the research workflow, share practical tools and formats, and provide guidance for applying the approach to similar HPC use cases. Let's start with the problem context and the goals of this project.

## Real scenario
Imagine a researcher that after a lot of studies, they want to run an execution of a simulation in order to see if their assumptions are correct and check the results. They have available an HPC environment, so they can use a huge amount of computational resources for the test. Therefore, the Slurm Workload Manager asks the user to reserve a specific amount of resources and for how long holding the resources, the so-called wall clock time. The wall clock is basically an estimation of the application duration used for reserving the resources. Usually the researcher does not know the exact execution time, so they try to guess inserting a random number, usually very high. Then, the researcher waits for the job completion and, in the worst case, the job reaches the wall clock time and fails. 

![Launch job in Slurm](/posts/master-thesis-main/slurm-launch.jpg)

## 

At this point, the researcher investigates to understand how this could happen. They start to look for the log files and the resource usage of the application to understand if the application used the resources in the right way, but there is nothing to see... Then the researcher explores if any other researcher did similar experiments, to understand if they implemented the application in a different way, but in most of the cases, they cannot find anything. So the researcher has to try again, and test it again, using a random amount of resources, and trying to guess a sufficient amount of time for completing the execution. This methodology made people in research to lose a lot of time.

![Looking for metadata](/posts/master-thesis-main/investigation.jpg)

## Current limitations
This real example shows clearly that in research there are some limitations:
- **Lack of communication**: in most of the cases, in research the publications do not include code and implementation of the experiments, but merely a description of the methodologies, which can change based on the programming language and based on the architecture where this execution are performed. 
- **Few data about resource usage available**: the researcher needs this data to understand how the application is performing during the execution. It is essential to understand if there is an inefficient use of resources or bottlenecks during the execution, allowing users to decide whether to assign more resources. This is also useful to describe the evolution of the application as a proof to include in the research and documenting the performance of the implementation.
- **Gambling the execution time**: it is almost impossible to guess the execution time of a job, so the user is forced to set a very high number to avoid the job failing. This causes either the resources to be reserved more than enough when the number is high, or the job to fail when the wall clock time is low.

## Goals

Based on the problem that we discovered and presented, we define the following goals:
- **Implementation of a profiling tool** able to monitor the resource usage of the job during the execution. In this project the technologies used for the implementation are `psutil` library, `top` command and `cgroup` system. The profiling tool will be able to collect data about the resource usage of the job, mainly CPU usage, memory usage, but also disk usage and network usage. Moreover, the profiler is able to collect the metadata of the job, such as the parameters used for the execution, the environment variables, the architecture where the execution is performed and, of course, the execution time. This profiler has been implemented in the COMPSs framework, which is a workflow management system for HPC environments [<span class='reference'>[1]</span>](#bibliography).

- **Record the metadata collected** with the profiling tool in a **standard and interoperable format**, which respect the FAIR principles (Findable, Accessible, Interoperable and Reusable) [<span class='reference'>[2]</span>](#bibliography). For this purpose, we adopted the RO-Crate format, which is a standard format for describing research data and metadata [<span class='reference'>[3]</span>](#bibliography), [<span class='reference'>[4]</span>](#bibliography). The RO-Crate format allows to describe the metadata of the job in a structured way. This format helps to understand the evolution of the data during the execution, the relationship between input data, tools and outputs. Also, it makes it easy to extract knowledge about the execution, share the data with other researchers and reproduce the experiments.

- **Store the metadata of many experiments in a database**, in order to have a big amount of data to analyze and to use for the prediction of the execution time. The choice and the deployment of the database required a deep analysis of the different options available, such as relational databases, NoSQL databases and graph databases. Eventually, we decided to use a RDF database, which is a graph database that allows users to store the metadata in a structured way, and to query the data using the SPARQL query language. Also, for storing the artifacts we used MinIO, which is object storage. Both technologies are integrated into the Provenance Storage project [<span class='reference'>[5]</span>](#bibliography), an open-source initiative designed to store research objects in a deployable database. I contributed to this project by improving its architecture.

 - **Prediction of the execution time** using the collected data, in order to avoid the gambling of the execution time and to optimize the use of the resources  [<span class='reference'>[6]</span>](#bibliography), [<span class='reference'>[7]</span>](#bibliography). For this purpose, we tested several machine learning models. The choice of the model was based on the performance of the model on the collected data, and on the error in the execution time prediction. Extreme Gradient Boosting (XGBoost) was the best model for this task, as it is able to handle a large amount of data and to provide a good performance in the prediction of the execution time [<span class='reference'>[8]</span>](#bibliography). 

 In the next posts, I will describe in detail the implementation of the profiling tool, the adoption of the RO-Crate format for describing the metadata, the deployment of the database for storing the metadata and the prediction of the execution time using machine learning models. Stay tuned! 😀

<a id="bibliography"> </a>

## Bibliography
- <span class='reference'>[1]</span> Tejedor, E., Becerra, Y., Alomar, G., Queralt, A., Badia, R. M., Torres, J., Cortes, T., & Labarta, J. (2017). PyCOMPSs: Parallel computational workflows in Python. *The International Journal of High Performance Computing Applications*, 31(1), 66-82.
- <span class='reference'>[2]</span> Sirvent, R., Conejero, J., Lordan, F., Ejarque, J., Rodriguez-Navas, L., Fernández, J. M., Capella-Gutierrez, S., & Badia, R. M. (2022). Automatic, Efficient and Scalable Provenance Registration for FAIR HPC Workflows. 2022 IEEE/ACM Workshop on Workflows in Support of Large-Scale Science (WORKS).
- <span class='reference'>[3]</span> RO-Crate Community. (2024). RO-Crate: A Lightweight Approach to Research Object Packaging. https://www.researchobject.org/ro-crate/
- <span class='reference'>[4]</span> Leo, S., Crusoe, M. R., Rodríguez-Navas, L., Sirvent, R., Kanitz, A., De Geest, P., ... & Fernández, J. M. (2024). Recording provenance of workflow runs with RO-Crate. PLoS one, 19(9), e0309210.
- <span class='reference'>[5]</span> Provenance Storage. (2026). https://github.com/crs4/provenance-storage
- <span class='reference'>[6]</span> Smith, W., Foster, I., & Taylor, V. (1998). Predicting application run times using historical information. Workshop on Job Scheduling Strategies for Parallel Processing, 122-142.
- <span class='reference'>[7]</span> Tanash, M., Andresen, D., Yang, H., & Hsu, W. (2021). Ensemble Prediction of Job Resources to Improve System Performance for Slurm-Based HPC Systems. Practice and Experience in Advanced Research Computing (PEARC '21).
- <span class='reference'>[8]</span> Groth, P., Cousijn, H., Clark, T., & Goble, C. (2020). FAIR Data Reuse — the Path Through Data Citation. Data Intelligence, 2(1-2), 78-86.