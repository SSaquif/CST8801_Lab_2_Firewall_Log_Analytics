# cst8801_lab_2_firewall_log_analytics

This project at the moment has 2 parts:

- TS scripts to parse the firewall logs and extract initial insights
  - This was set up using `bun init` in bun v1.0.23. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
- A Jupyter notebook to perform further analysis and visualization of the data
  - We are using a Python virtual environment for the Jupyter notebook
  - `TODO:` We will eventually move the dependencies to `requirements.txt` for easier setup

## Nodejs (Bun setup)

Initial set up

```bash
bun init
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.23. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Python (Jupyter notebook setup)

Virtual environment setup:

```bash
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate
pip -m pip install -U pip jupyter pandas

# Future
# pip install -r requirements.txt
```
