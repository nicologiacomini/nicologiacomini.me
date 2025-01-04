---
title: The Bitcoin end
date: January 1, 2025
summary: "Let's explore all the causes that will bring the end of Bitcoin. Will it eventually die?"
visible: true
---

I want to start by saying that I am a fan of Bitcoin and I own a small amount of my savings in bitcoin. However, I believe that finding the reasons why bitcoin might die is important for a complete understanding of the next move to act, in order not to lose them all before it is too late.

## First threat: quantum computers

It is well known that Bitcoin (with 'B' it is the protocol) is built on the hash function principles. This means that to approve a block (containing a set of transactions), a node in the network must calculate the right hash. 

The right hash changes during the time and it is defined by a difficulty target. The difficulty defines, in simple words, how many '0's the hash has to have. For instance, a hash which starts with '00...' is less difficult to find than a hash which starts with '0000000000...'. The principle of Proof-of-Work is simple: try to calculate the hash and repeat it until it finds the correct hash, a brute force operation. In Bitcoin SHA256 is used, one of the most used hash algorithms.

This situation could change in a few years. The quantum computers have been developing for some years, and now, they are ready to be more accessible. I recently read this article by Google [<span class='reference'>[1]</span>](#bibliography), where they claim: "Willow’s performance on this benchmark is astonishing: It performed a computation in under five minutes that would take one of today’s fastest supercomputers 1025 or 10 septillion years. If you want to write it out, it’s 10,000,000,000,000,000,000,000,000 years." 

This means that finding a hash or several hashs is billions of billions of times faster. Potentially, whoever has available this computing power could rewrite the Bitcoin story in a few hours.

This is a technological revolution. If quantum computers could be easily accessible, the end of the Bitcoin protocol and all the blockchains that implement Proof-of-Work as a consensus algorithm should be compromised forever. Actually, to be fair, all the encryption methods and every algorithm that exploits the fact that finding a sequence of bits is difficult and power-consuming, are at risk. However, the research into quantum-resistant cryptography is ongoing and the quantum computing adoption for malicious purposes might still be decades away.

## Second threat: mining costs

### Energy Costs  

While quantum computing can be considered a future problem, the more immediate concerns regard the rising costs and centralization risks.

Bitcoin uses proof-of-work and due to such a mechanism, the mining activity is very power-consuming, both in terms of computational power and in terms of energy consumption. The concern about the energy costs regards the provenance of the energy. Nowadays, most of the energy comes from fossil fuels which contribute to carbon emissions. 

Additionally, the rising energy costs directly affect mining profitability. The high costs of electricity can make mining unfeasible for some users, so they indirectly push them out of the market. This situation can bring the centralization of the miners in specific regions with cheaper energy sources. Clear examples are some areas of China or countries like Kazakhstan. This concentration can create vulnerabilities in the network, and geopolitical dependencies.

On the other side, some mining operations started to adopt renewable energy sources such as hydroelectric, solar, and wind power. A very admirable example is the case of El Salvador which is using the geothermal energy of the volcanoes to mine bitcoins [<span class='reference'>[6]</span>](#bibliography). While this transition is encouraging, the development is still unripe. Many regions lack access to affordable renewable energy, and some miners prioritize cost efficiency over sustainability.

### The silicon price
Let's suppose that the advent of quantum computing is very far. There is another threat that has been coming, and that is the price of silicon.

In the last few years, especially after the pandemic, the price of silicon has grown strongly. There are different reasons:
- **Technology growth**: many sectors have been developing and new sectors have started implementing new technology (IoT, solar panels, smart stuff...) and all of these generated a big demand. 
- **Automotive**: the raising of the electric car, incredibly increased the demand for silicon and this brought a consequent increase in the price. 
- **Construction industry**: since silicon is not used only to build electronic components, but in the construction industry too, after the long stop of some construction activity due to the pandemic, the demand increased in one shot right after that and this caused a silicon shortage.
- **Energy rationing**: China is the largest producer of Silicon worldwide, and the strict environmental policies have slowed down the production of silicon.
- **Commercial global tension**: the fear of a potential supply chain disruption due to the ongoing conflict between Russia and Ukraine has increased the demand for silicon [<span class='reference'>[3]</span>](#bibliography). Additionally, China, which is one of the major global producers of silicon, relies partly on energy imports from Russia. The conflict has indirectly impacted the stability of the silicon supply chain.
- **Inflation**: this phenomenon affected all the prices, including the price of silicon, therefore the price grew. As it is written in [<span class='reference'>[2]</span>](#bibliography), "[...] according to the China Times, wafer prices are expected to increase by up to 25% by 2025. Companies like GlobalWafers, Taiwan's biggest manufacturer, have already pre-sold all their wafers through 2024." 

All these factors contributed to the increasing price of silicon and this caused a high cost for those who want to start to mine bitcoin. If the price of silicon increases, the cost to start to mine bitcoin will be higher and higher. And not only this. The difficulty in collecting performing hardware, the competition among the miners around the world, and the consequent increase of the difficulty target set by the Bitcoin protocol, are making the mining activity inaccessible. 

Moreover, this situation is negatively affected by the creation of mining pools. A mining pool is a group of miners who connect their mining machines over a network to boost their chances of earning the reward for the creation of a new block. On one hand, these kinds of services allow "normal people" to contribute to mining activities without purchasing their own hardware, but on the other hand, mining pools centralize mining power into a few large groups of nodes.

Since Bitcoin was born in order to encourage decentralization, we can consider this centralization attempt very bad news and a threat to the Bitcoin network. 

### Halving cycles
Another problem regarding the costs of mining is the halving cycle. The halving cycle occurs approximately every four years and it consists of a reduction in the revenue given to miners by half. This could pose a threat to the Bitcoin protocol. 

Let's assume that the price of bitcoin stays consistent over time. If the revenue to the miners becomes lower, the miners may start to have too high costs. Then, the miners could decide to stop their contribution to the network, so there could be a reduction in the number of miners. Consequently, the Bitcoin protocol could become slower, since there are fewer miners, and the probability that a random miner in the system "guesses" the right hash decreases. Therefore, in order to have more chances that their transaction is approved in a short time, the users would start to add more fees to the transaction costs. In this scenario, the users may decide to leave Bitcoin and find a cheaper solution, since the costs are too high and whereas the utilization of Bitcoin decreases, the price could drop dramatically, and lead to the end of Bitcoin.

To be honest, the assumption that the price stays stable is unrealistic, more likely the price will grow up. This is also driven by the fact the number of bitcoin that the protocol is able to generate is limited, allowing it to implement a deflationary model. However, the price of bitcoin cannot grow to infinite, and it is possible that the trade-off between the revenues and the costs will not be positive anymore.

## Third threat: limitedness of bitcoin
Another potential issue of the Bitcoin protocol is the maximum number of tokens that can be generated. The limit specified by the standard is 21 million [<span class='reference'>[4]</span>](#bibliography). I am not saying that the limitedness is an economic problem, but the mechanism behind the protocol could be compromised because of this characteristic. Let me explain better. 

I know that it is not possible to compare bitcoin with FIAT currencies and stocks. It is a completely different asset. We can assume that is more like gold (so much so that it is called "the digital gold"). Moreover, the projection is that by 2140, all bitcoins will be mined, and this could present several problems. The point is that bitcoin was born as an alternative to exchange money without needing to trust a central authority, like a currency. In my opinion, this view is wrong.  

The protocol means that the miners receive a reward when they validate and append to the chain a new block. Those rewards are mostly new bitcoins generated by the protocol (mined) and a small part is the transaction fees paid by the users [<span class='reference'>[4]</span>](#bibliography). Now, assume that all bitcoins have been mined. 

First, who will be interested in participating in the correct working of the network if there is no reward for the work done? This situation could be overcome by setting higher fees that could serve as rewards for the miners. However, this solution raises another problem: how high will transaction fees become when someone wants to exchange bitcoins? If the fees are too high, transaction costs could increase uncontrollably. This may become a turning point for the future of the protocol, whereas costs become too high, people may stop using it altogether.

Another issue is the following. If all bitcoins have been mined, what will the difficulty target be? Based on the Bitcoin Wiki [<span class='reference'>[5]</span>](#bibliography), the difficulty decreases when the actual time to generate 2016 blocks is longer than two weeks. Technically speaking, this is a reasonable solution, but it brings some additional concerns about long-term sustainability and scalability. In addition, the code of the protocol cannot be updated anymore, and if a bug suddenly appears, there is no chance to update and solve it.

After this analysis, I have some doubts about the protocol once all tokens have been mined. The only reward would be transaction fees. In that case, the miners would likely choose to validate only the transactions with the higher fees, ignoring all the transactions with lower fees. In very simple words, if you are rich you can use Bitcoin. Wasn't it meant to make payment systems more accessible worldwide? These considerations raise some concerning questions about the future of the protocol.

## Fourth threat: another cryptocurrency replaces bitcoin
This scenario is unlikely but there is the possibility that a new cryptocurrency could take the place of bitcoin. I am not talking about any specific cryptocurrency right now. Anyway, I don't want to exclude that in the future, thanks to the development of the technology, another blockchain could become the leader in this field. 

Currently, I believe that Bitcoin is not replaceable easily, especially because the community behind Bitcoin is very strong and loyal. Furthermore, in my opinion, the absence of any CEO or owner gives Bitcoin a sort of _aura_ and makes it unique. 


### Conclusion
While Bitcoin aims to overcome difficult challenges, it is important to know its adaptability and resilience.

The community behind Bitcoin is one of its greatest strengths. Bitcoin is more than just a cryptocurrency; it is a symbol of financial freedom and decentralization. Its limited supply ensures that it remains a deflationary asset, it is often defined as digital gold. While its fixed supply raises concerns about miner incentives after 2140, the evolution of Bitcoin's ecosystem suggests that it can improve usability and efficiency. This is demonstrated by the development of Layer 2 solutions, such as the Lightning Network that allows to reduce the fee transactions and increase their speed.

Moreover, the impact of Bitcoin cannot be ignored. Even governments and institutions are beginning to integrate it into their financial systems or adopt it as legal tender.

Bitcoin’s story is far from over. Despite all the technological criticism, it is a milestone in the field of blockchains thanks to its foundational principles of decentralization and transparency. It is marking an important chapter in human history, as it has changed the way we think about money and how we exchange it, and nothing will erase this impact.


<a id="bibliography"> </a>

## Bibliography
<span class='reference'>[1]</span> [Google - Willow quantum chip](https://blog.google/technology/research/google-willow-quantum-chip/)

<span class='reference'>[2]</span> [Waferworld - How Inflation Is Affecting Technology and Wafer Production](https://www.waferworld.com/post/how-inflation-is-affecting-technology-and-wafer-production)

<span class='reference'>[3]</span> [Waferworld - Silicon Symphony: Navigating Market Waves Amidst the Russia-Ukraine Conflict](https://www.waferworld.com/post/silicon-symphony-navigating-market-waves-amidst-the-russia-ukraine-conflict)

<span class='reference'>[4]</span> [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf)

<span class='reference'>[5]</span> [Bitcoin Wiki - Difficulty](https://en.bitcoin.it/wiki/Difficulty)

<span class='reference'>[6]</span> [El Salvador mines 474 Bitcoin using geothermal volcanic energy](https://cointelegraph.com/news/el-salvador-mines-bitcoin-volcanic-energy)
