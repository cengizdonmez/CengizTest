using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CengizTest.Models;

namespace CengizTest.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
    
    // AJAX için örnek metot
    [HttpGet]
    public IActionResult GetData()
    {
        var data = new { 
            message = "Hello from server!", 
            timestamp = DateTime.Now,
            items = new[] { "Item 1", "Item 2", "Item 3" } 
        };
        
        return Json(data);
    }
}