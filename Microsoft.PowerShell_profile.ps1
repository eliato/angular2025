oh-my-posh init pwsh --config ~/AppData/Local/Programs/oh-my-posh/themes/bubbles.omp.json | Invoke-Expression
Import-Module -Name Terminal-Icons
Import-Module -Name PSReadLine

Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle ListView
Set-PSReadLineOption -EditMode Windows



