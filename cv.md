# **Hanna Kunitskaya**

## Contact
* Email: hanna_kunitskaya@gmail.com
* GitHub: <https://github.com/Han-ku>

## Personal information
* Communicativeness and teamwork
* Availability and commitment
* Willingness to constantly improve qualifications
* Scrupulousness and accuracy

## Skills
* Relational Databases
  * Oracle MS
  * SQL
* Database Application(C#)
* Java
* Bash(base)
* Mainframe knowledge

## Example of code
An example from the C# project
```
    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var movie = await _context.Movie.FindAsync(id);
            _context.Movie.Remove(movie);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
```

