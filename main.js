function save()
{
    localStorage.setItem("Note-",input_note);
}
function show()
{
    document.getElementById("Note-").innerHTML ="Note- " + input_note;
}