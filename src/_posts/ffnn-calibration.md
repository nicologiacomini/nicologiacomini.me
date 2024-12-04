---
title: "FFNN for data calibration" 
date: August 8, 2024
summary: "How to implement a FFNN for data calibration. Which will be the best implementation?"
words: 0
visible: false
---

## The tools
I will use this

```Python
import numpy as np # for algebric operations
import csv # for reading and writing CSV files
import matplotlib.pyplot as plt # for data visualization
from sklearn.metrics import r2_score # for calculating R-squared score
```

In this case we have different numbers of neurons, based on the test. In this experiment I want to try to evaluate the different effects that I get based on the number of neurons.


### The goal
The goal of this experiment will be to find the best model for the calibration problem. To achieve this objective we will need to try different combination of the parameters and different number of hyperparameters in order to avoid the underfitting and the overfitting, and yield a good approximation of the input features so that the input signal will be a good approximation of the reference signal. 

Note that in this kind of machine learning problems, there is not any specific way to find the best model The only way is to try with several combinations of the model and adjust the hyperparameters in order to get a result and calculate the values of statistcal indexes such as RMSE or R$^2$. The one with the best values will be the finally model.

I hope this brief introduction on the Feedforward Neural Network would have been useful, I will base the next posts about the FFNN on this, stay tuned! 😀