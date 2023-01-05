import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class JsonToCsvService {
  constructor() {}

  private generateFile(csvData: any, filename: any) {
    const blob = new Blob(["\ufeff" + csvData], {
      type: "text/csv;charset=utf-8;"
    });
    const downloadLink = document.createElement("a");
    const url = URL.createObjectURL(blob);
    const isSafariBrowser =
      navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1;
    if (isSafariBrowser) {
      downloadLink.setAttribute("target", "_blank");
    }
    downloadLink.setAttribute("href", url);
    downloadLink.setAttribute("download", filename + ".csv");
    downloadLink.style.visibility = "hidden";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  private convertToCSV(objArray: any, headerList: any) {
    const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";
    let row = "S.No,";

    for (const index in headerList) {
      row += headerList[index] + ",";
    }

    row = row.slice(0, -1);
    str += row + "\r\n";
    for (let i = 0; i < array.length; i++) {
      let line = i + 1 + "";
      for (const index in headerList) {
        const head = headerList[index];

        line += "," + array[i][head];
      }
      str += line + "\r\n";
    }
    return str;
  }

  downloadFile() {
    const data = [
      {
        column1: "a",
        column2: "b",
        column3: "c",
        column4: "d"
      },
      {
        column1: "a",
        column2: "b",
        column3: "c",
        column4: "d"
      }
    ];

    const fileName = "json2csv";

    let csvData = this.convertToCSV(data, ["column1", "column2", "column3", "column4"]);
    this.generateFile(csvData, fileName);
  }
}
