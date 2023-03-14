let html = `<h3>What is a group?</h3>

This is a typical post. 
A group \( G \) is a set with a binary operation \( * )\ such that:
<ul>There is an identity element \(e\) such that \(e*g = g*e = g \)
    for every element in the group.
</ul>
<ul>For every \( g \) there exists a \( g^(-1) )\ such that \(g*g^(-1) = e\)</ul>
<ul>The operation \( * \) is associative.</ul>

That is the definition of a group.`

document.getElementById("01_groups_intro").innerHTML = html;