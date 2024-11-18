***DISCLAIMER***: This is a proof-of-concept project with no means to be a fully-fledged product.

# Retrieval-Augmented Generation (RAG)
![image](https://github.com/user-attachments/assets/0fb45dde-8005-4e7f-8a6a-fbb0eb003e48)


1. [Overview](#overview)  
2. [Tech Stack Workflow](#tech-stack-workflow)  
3. [Purpose of the PoC](#purpose-of-the-poc)  

## Overview

**Retrieval-Augmented Generation (RAG)** is an advanced paradigm in natural language processing (NLP) that combines two core AI components: a **retrieval system** and a **generation model**. 

- The **retrieval system** accesses a large corpus of information to provide relevant context or facts.  
- The **generation model**, often based on transformer architectures like GPT, uses this context to generate accurate, coherent, and contextually rich responses.

RAG bridges the gap between:
- Generative models, which may produce fluent but factually inconsistent outputs.
- Retrieval-based systems, which are grounded in real-world data but lack linguistic creativity.

By leveraging both components, RAG ensures responses are fluent, factual, dynamic, and grounded in external knowledge sources.


This document outlines the **Retrieval-Augmented Generation (RAG)** approach implemented as a **Proof of Concept (PoC)** for **NBA GPT**, a system designed to answer user queries about the NBA. RAG was employed to ensure accurate and contextually relevant responses by integrating information retrieval with natural language generation. The system utilizes the following external resources for retrieval:

- [NBA Official Stats Website](https://www.nba.com/stats)  
- [Wikipedia Article on the NBA](https://pt.wikipedia.org/wiki/National_Basketball_Association)  
- [Wikipedia Article on NBA Records](https://pt.wikipedia.org/wiki/Lista_de_recordes_da_NBA)  

---

## Tech Stack Workflow

1. **Frontend**: Built with **Next.js**, leveraging JavaScript for dynamic, responsive user interfaces.
2. **Backend**: Uses **LangChain.js** to handle retrieval-augmented generation by combining OpenAI's LLM with external data sources.
3. **Hosting**: Deployed on **Vercel** for efficient and scalable delivery to end users.
4. **Language Model**: Powered by **OpenAI** for natural language understanding and generation.


## Purpose of the PoC

The primary goal of this PoC is to demonstrate the capability of RAG to:
1. Retrieve relevant information from reliable external sources.
2. Provide factual and well-structured responses to user queries about the NBA.
3. Highlight the benefits of combining retrieval and generation for domain-specific applications.

### The results
The **gpt-3.5-turbo** which is data traininig is limited **Up to Sep 2021** from https://platform.openai.com/docs/models [18/11/2024]
![image](https://github.com/user-attachments/assets/8f060798-ce90-4ad2-83e0-341e6e32706d)

The OpenAI API is now capable of answering any questions related to the sites I mentioned, based on the **data** from _NBA Official Stats Website_, _Wikipedia Article on the NBA_, _Wikipedia Article on NBA Records_ from the this date 18/11/2024


