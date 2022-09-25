export function recursivelyFormTreeStructure(root, data) {
  for (let i = 0; i < data.length; i++) {
    let temparr;
    if (i > 0) {
      let tempstr = data[i].name;
      if (tempstr === 'No Such Files and Folders')
        tempstr = data[0] + '|' + tempstr;
      temparr = tempstr.split('|');
    } else {
      temparr = data[i].split('|');
    }
    recursivelyFormTreeStructureUtil(root, temparr, 0);
  }
}

function recursivelyFormTreeStructureUtil(root, arr, idx) {
  if (arr.length == idx) return;

  let node = {
    name: arr[idx],
    childrenHidden: false,
    lastchild: idx == arr.length - 1,
    isExpanded: true,
    children: [],
  };

  let isPresent = root.some((ele) => {
    if (ele.name === arr[idx]) {
      (ele.lastchild = false),
        recursivelyFormTreeStructureUtil(ele.children, arr, idx + 1);
      return true;
    }
  });

  if (!isPresent) {
    root.push(node);
    recursivelyFormTreeStructureUtil(node.children, arr, idx + 1);
  }
}

export function formTableStructure(table, data) {
  data.forEach((ele, idx) => {
    if (idx != 0) {
      if (ele.name !== 'No Such Files and Folders') {
        table.push({
          ...ele,
          name: ele.name
            .replaceAll(data[0] + '|', '')
            .replaceAll('|', '\\')
            .trim(),
          created_time: formatDate(new Date(Number(ele.created_time) * 1000)),
          modified_time: formatDate(new Date(Number(ele.modified_time) * 1000)),
          c_time: Number(ele.created_time),
          m_time: Number(ele.modified_time),
        });
      } else {
        table.push({
          ...ele,
        });
      }
    }
  });
}

export function formDeleteTableStructure(table, data) {
  data.forEach((ele, idx) => {
    if (idx != 0) {
      if (ele.name !== 'No Such Files and Folders') {
        table.push({
          ...ele,
          name: ele.name
            .replaceAll(data[0] + '|', '')
            .replaceAll('|', '\\')
            .trim(),
          deleted_time: formatDate(new Date(Number(ele.deleted_time) * 1000)),
          d_time: Number(ele.deleted_time),
        });
      } else {
        table.push({
          ...ele,
        });
      }
    }
  });
}

export function formBarGraphData(data) {
  let ans=[] 
  data.forEach(ele=>{
    let obj={
      date: formatDate2(Number(ele.requested_time)*1000), 
      numberOfFiles: Number(ele.number_of_files), 
      height: 'height:' + Number(((ele.number_of_files) / 30) * 100) + '%',
    }
    ans.push(obj); 
  })
  return ans;
}

function formatDate2(date) {
  let options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'Asia/Calcutta',
  };

  let datetime = new Intl.DateTimeFormat('default', options).format(date);
  datetime = datetime.replaceAll(',', '');
  return datetime;
}


function formatDate(date) {
  let options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'Asia/Calcutta',
  };

  let datetime = new Intl.DateTimeFormat('default', options).format(date);
  datetime = datetime.replaceAll(',', '');
  return datetime;
}


// export function formBarGraphData(data) {
//   if (data[1].name === 'No Such Files and Folders') {
//     return {
//       date: new Date().toLocaleTimeString(),
//       numberOfFiles: 0,
//       numberOfFilesPercent: 0,
//     };
//   }
//   return {
//     date: new Date().toLocaleTimeString(),
//     numberOfFiles: data.length - 1,
//     height: 'height:' + Number(((data.length - 1) / 30) * 100) + '%',
//   };
// }
