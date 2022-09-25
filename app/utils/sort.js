export function sortByCreatedTimeUtil(table, isAscending) {
  if (isAscending) {
    table.sort(ascCompareForCreatedTime);
  } else {
    table.sort(descCompareForCreatedTime);
  }
}

export function sortByModifiedTimeUtil(table, isAscending) {
  if (isAscending) {
    table.sort(ascCompareForModifiedTime);
  } else {
    table.sort(descCompareForModifiedTime);
  }
}
export function sortByDeletedTimeUtil(table, isAscending) {
  if (isAscending) {
    table.sort(ascCompareForDeletedTime);
  } else {
    table.sort(descCompareForDeletedTime);
  }
}

export function sortByNameUtil(table, isAscending) {
  if (isAscending) {
    table.sort(ascCompareForName);
  } else {
    table.sort(descCompareForName);
  }
}

function ascCompareForName(a, b) {
  return a.name.localeCompare(b.name);
}

function descCompareForName(a, b) {
  return -a.name.localeCompare(b.name);
}

function ascCompareForCreatedTime(a, b) {
  if (a.c_time < b.c_time) {
    return -1;
  }
  if (a.c_time > b.c_time) {
    return 1;
  }
  return 0;
}

function descCompareForCreatedTime(a, b) {
  if (a.c_time < b.c_time) {
    return 1;
  }
  if (a.c_time > b.c_time) {
    return -1;
  }
  return 0;
}

function ascCompareForModifiedTime(a, b) {
  if (a.m_time < b.m_time) {
    return -1;
  }
  if (a.m_time > b.m_time) {
    return 1;
  }
  return 0;
}

function descCompareForModifiedTime(a, b) {
  if (a.m_time < b.m_time) {
    return 1;
  }
  if (a.m_time > b.m_time) {
    return -1;
  }
  return 0;
}

function ascCompareForDeletedTime(a, b) {
  if (a.d_time < b.d_time) {
    return -1;
  }
  if (a.d_time > b.d_time) {
    return 1;
  }
  return 0;
}

function descCompareForDeletedTime(a, b) {
  if (a.d_time < b.d_time) {
    return 1;
  }
  if (a.d_time > b.d_time) {
    return -1;
  }
  return 0;
}
