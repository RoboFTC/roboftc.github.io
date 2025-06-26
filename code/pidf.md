# PIDF Controller Tutorial

A **PIDF controller** is one of the most common control algorithms in robotics. It helps mechanisms reach and hold positions or velocities accurately by adjusting motor power based on feedback.

PIDF stands for:

- **P** — Proportional
- **I** — Integral
- **D** — Derivative
- **F** — Feedforward

---

## 🔧 What is PIDF?

A PIDF controller constantly compares a **target value (setpoint)** to the **current value (measured)** and calculates how much power to apply.

### Basic Formula:

```text output = (P * error) + (I * accumulatedError) + (D * errorRate) + (F * setpoint) ```