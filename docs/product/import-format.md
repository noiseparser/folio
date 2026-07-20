# Account import format

CSV imports accept the following columns: `name`, `domain`, `owner`, `contact`, `stage`, `health`, and `value`.

Names are trimmed, domains are normalized, and negative deal values are rejected. A preview step reports duplicates and invalid rows before anything is added.
