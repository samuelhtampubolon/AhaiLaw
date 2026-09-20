import re

def audit():
    with open('src/data/cases.ts', 'r', encoding='utf-8') as f:
        cases_txt = f.read()

    with open('src/data/islands-data.ts', 'r', encoding='utf-8') as f:
        islands_txt = f.read()

    # Find case IDs like "id": "CASE-1"
    case_ids = re.findall(r'"id":\s*"CASE-(\d+)"', cases_txt)
    print(f"[AUDIT] Case IDs found: {len(case_ids)}")
    unique_ids = set(case_ids)
    print(f"[AUDIT] Unique Case IDs: {len(unique_ids)}")
    assert len(case_ids) == 240, f"Expected 240 case IDs, got {len(case_ids)}"
    assert len(unique_ids) == 240, "Case IDs have duplicates!"

    # Find case titles
    case_titles = re.findall(r'"title":\s*"(Kasus #[^"]+)"', cases_txt)
    print(f"[AUDIT] Case Titles found: {len(case_titles)}")
    unique_titles = set(case_titles)
    print(f"[AUDIT] Unique Titles: {len(unique_titles)}")
    assert len(case_titles) == 240, f"Expected 240 case titles, got {len(case_titles)}"
    assert len(unique_titles) == 240, f"Duplicate titles found! Count={len(unique_titles)}"

    # Island keys in allCasesMap
    island_keys = re.findall(r'"(\d+-\d+)":\s*\[', cases_txt)
    print(f"[AUDIT] Island keys in casesMap: {len(island_keys)}")
    assert len(island_keys) == 80, f"Expected 80 island keys, got {len(island_keys)}"
    assert len(set(island_keys)) == 80, "Duplicate island keys in casesMap!"

    # Island IDs in islands-data.ts
    island_ids = re.findall(r'"id":\s*"(\d+-\d+)"', islands_txt)
    print(f"[AUDIT] Island IDs in islands-data: {len(island_ids)}")
    assert len(island_ids) == 80, f"Expected 80 island IDs, got {len(island_ids)}"
    assert len(set(island_ids)) == 80, "Duplicate island IDs in islands-data!"

    # Verify all 80 islands have keys in allCasesMap
    for l in range(1, 9):
        for i in range(1, 11):
            key = f"{l}-{i}"
            assert key in island_keys, f"Missing island key {key} in casesMap!"
            assert key in island_ids, f"Missing island ID {key} in islands-data!"

    print("=" * 70)
    print("[PASSED 100%] ALL 240 CASES AND 80 ISLANDS ARE FULLY VERIFIED, UNIQUE, AND MAPPED!")
    print("=" * 70)

if __name__ == '__main__':
    audit()
