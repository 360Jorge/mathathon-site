# Hassett divisors and cubic fourfold rationality

Notes and code toward understanding the lattice picture behind Hassett divisors in the moduli space of cubic fourfolds. Built for the Caltech Mathathon (theme: "Old Problems, New Proofs").

**This project explains and implements known results.** The mathematics is due to Hassett and to Yang–Yu. Nothing here is a new theorem.

## Goal

1. Understand, and explain clearly, how intersections of Hassett divisors reduce to questions about lattices.
2. Implement Yang–Yu's algorithm (Algorithm 7.6) for the irreducible components of the intersection of two Hassett divisors, and check it against published examples.

The website is the main output. The calculator supports it.

## Status

Early. The site skeleton runs. The calculator is not started. Posts and concept pages are being written as the material is learned, so expect gaps and drafts.

## What is in this repo

- `content/posts`: explanatory posts, in dependency order
- `content/concepts`: short definitions with examples and non-examples
- `content/notebook`: dated notes, including confusions and how they were resolved
- `data/verification.json`: the published cases the calculator must reproduce, and whether each passes
- `ai-logs/`: saved AI conversations (see below)

## Run it locally

    npm install
    npm run dev

Then open http://localhost:3000. To check a production build, run `npm run build`.

## Validation targets

The calculator should reproduce these published results:

| Input (d₁, d₂) | Expected number of components |
|---|---|
| (8, 14) | 5 |
| (8, 26) | 8 |
| (20, 12) | 6 |

## Sources

- Yang and Yu, *On lattice polarizable cubic fourfolds*: https://arxiv.org/abs/2103.09132
- Hassett, *Special cubic fourfolds*, Compositio Math. 120 (2000): https://www.math.brown.edu/bhassett/papers/cubics/cubic.pdf

## AI use

AI assistants have been used for topic selection, planning, and drafting the site skeleton. The text of the posts is written by the author. Conversations are saved in `ai-logs/`, and the site's AI-use page says where and how each tool was used and how its output was checked.

## Contact and license

Author: Jorge. Add contact details here. License: not yet chosen.
