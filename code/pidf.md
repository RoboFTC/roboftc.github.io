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

```text
output = (P * error) + (I * accumulatedError) + (D * errorRate) + (F * setpoint)
```

### ✔️ Each term has a role:

- **Proportional (P)** — Corrects based on the current error. Bigger error = bigger correction.
- **Integral (I)** — Corrects accumulated past errors to eliminate drift or steady-state error.
- **Derivative (D)** — Predicts future error by reacting to how quickly the error is changing.
- **Feedforward (F)** — A constant guess of how much power it generally takes to reach the target, independent of error (e.g., gravity compensation).

---

## 🧠 How PIDF Works (Step-by-Step)

1. **Calculate Error**

```text
error = targetPosition - currentPosition
```

2. **Compute Terms**

```text
P = kP * error
I = kI * totalAccumulatedError
D = kD * (error - lastError) / deltaTime
F = kF * targetPosition
```

3. **Calculate Output**

```text
output = P + I + D + F
```

4. Apply Output

```text
setPower(output)
```

## Example FTC Code:

```java
public class PIDFController {
    // PIDF coefficients
    public double kP, kI, kD, kF;

    // State variables
    private double sumError = 0;
    private double lastError = 0;
    private double lastTime = 0;

    public PIDFController(double kP, double kI, double kD, double kF) {
        this.kP = kP;
        this.kI = kI;
        this.kD = kD;
        this.kF = kF;
    }

    public void reset() {
        sumError = 0;
        lastError = 0;
        lastTime = 0;
    }

    public double calculate(double target, double current) {
        double currentTime = System.nanoTime() / 1e9;
        double deltaTime = (lastTime == 0) ? 0 : (currentTime - lastTime);

        double error = target - current;

        // Proportional
        double P = kP * error;

        // Integral
        if (deltaTime > 0) {
            sumError += error * deltaTime;
        }
        double I = kI * sumError;

        // Derivative
        double derivative = (deltaTime > 0) ? (error - lastError) / deltaTime : 0;
        double D = kD * derivative;

        // Feedforward
        double F = kF * target;

        // Store for next loop
        lastError = error;
        lastTime = currentTime;

        // Total output
        return P + I + D + F;
    }
}
```

## Example Use In OpMode

```java
PIDFController armController = new PIDFController(0.01, 0, 0.001, 0.05);

@Override
public void loop() {
    double targetPosition = 500; // Example target (ticks)
    double currentPosition = armMotor.getCurrentPosition();

    double power = armController.calculate(targetPosition, currentPosition);

    power = Math.max(-1, Math.min(1, power)); // Clamp power to [-1, 1]
    armMotor.setPower(power);
}
```

## ⚠️ How to Tune PIDF

1. Feedforward (F) — Start here. Estimate the power needed to hold or move the mechanism with no error correction.

2. Proportional (P) — Makes the mechanism respond to error. Raise it until it moves toward the target quickly but doesn’t overshoot too much.

3. Derivative (D) — Add if the mechanism overshoots or oscillates. D slows down the motion as it approaches the target.

4. Integral (I) — Use to eliminate small, constant errors that P can’t fix (e.g., due to friction). Be careful: too much I causes wind-up and instability.

## 🚀 Why Use PIDF?
Smooth and accurate movements

Corrects for gravity, friction, and load changes

Essential for mechanisms like:

- Arms

- Turrets

- Slides

- Drivetrain heading hold

- Flywheel velocity control