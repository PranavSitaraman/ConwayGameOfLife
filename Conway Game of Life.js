let rows = 27;
let columns = 48;
for (let divNum = 0; divNum < rows; divNum++)
{
    let div = document.createElement("div");
    div.setAttribute("id",`row${divNum}`);
    document.body.appendChild(div);
}
for (let rowNum = 0; rowNum < columns; rowNum++)
{
    for (let i = 0; i < rows; i++)
    {
        let btn = document.createElement("button");
        let heightPct = 100/rows;
        let widthPct = rows/columns * heightPct;
        btn.style.height = `${heightPct}%`;
        btn.style.width = `${widthPct}%`;
        btn.style.backgroundColor = 'lightgrey';
        let row =  document.querySelector(`#row${i}`);
        row.appendChild(btn);
    }
}
for (let i = 0; i < rows * columns; i++)
{
    document.getElementsByTagName('button')[i].addEventListener("click", function()
    {
        if (document.getElementsByTagName('button')[i].style.backgroundColor == 'yellow')
        {
            document.getElementsByTagName('button')[i].style.backgroundColor = 'lightgrey';
        }
        else
        {
            document.getElementsByTagName('button')[i].style.backgroundColor = 'yellow';
        }
    });
}
document.addEventListener('keypress', (event) =>
    {
        var name = event.key;
        if (name == "a")
        {
            var arr = new Array(81);
            for (let i = 0; i < rows * columns; i++)
            {
                let count = 0;
                if (i + 1 % columns != 0 && 0 <= i + 1 && i + 1 < rows * columns && document.getElementsByTagName('button')[i + 1].style.backgroundColor == 'yellow') count++;
                if (i % columns != 0 && 0 <= i - 1 && i - 1 < rows * columns &&  document.getElementsByTagName('button')[i - 1].style.backgroundColor == 'yellow') count++;
                if (0 <= i + columns && i + columns < rows * columns && document.getElementsByTagName('button')[i + columns].style.backgroundColor == 'yellow') count++;
                if (0 <= i - columns && i - columns < rows * columns && document.getElementsByTagName('button')[i - columns].style.backgroundColor == 'yellow') count++;
                if (i + 1 % columns != 0 && 0 <= i + columns + 1 && i + columns + 1 < rows * columns && document.getElementsByTagName('button')[i + columns + 1].style.backgroundColor == 'yellow') count++;
                if (i % columns != 0 && 0 <= i + columns - 1 && i + columns - 1 < rows * columns && document.getElementsByTagName('button')[i + columns - 1].style.backgroundColor == 'yellow') count++;
                if (i % columns != 0 && 0 <= i - columns - 1 && i - columns - 1 < rows * columns && document.getElementsByTagName('button')[i - columns - 1].style.backgroundColor == 'yellow') count++;
                if (i + 1 % columns != 0 && 0 <= i - columns + 1 && i - columns + 1 < rows * columns && document.getElementsByTagName('button')[i - columns + 1].style.backgroundColor == 'yellow') count++;
                if (document.getElementsByTagName('button')[i].style.backgroundColor == 'yellow')
                {
                    if (count != 2 && count != 3)
                    {
                        arr[i] = 1;
                    }
                    else
                    {
                        arr[i] = 0;
                    }
                }
                else
                {
                    if (count == 3)
                    {
                        arr[i] = 1;
                    }
                    else
                    {
                        arr[i] = 0;
                    }
                }
            }
            for (let i = 0; i < rows * columns; i++)
            {
                if (arr[i] == 1)
                {
                    if (document.getElementsByTagName('button')[i].style.backgroundColor == 'yellow')
                    {
                        document.getElementsByTagName('button')[i].style.backgroundColor = 'lightgrey';
                    }
                    else
                    {
                        document.getElementsByTagName('button')[i].style.backgroundColor = 'yellow';
                    }
                }
            }
        }
    }, false);