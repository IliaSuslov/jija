
## Add new resin

mutation($Resin:InputResin!) {
  NewResin(input:$Resin ){_id}
}

{
  "Resin":{ "name": "test", "desc": "test" }
}