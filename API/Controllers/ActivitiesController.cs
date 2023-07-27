using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
        {
    //     public readonly IMediator _mediator;

    //     public ActivitiesController(IMediator mediator)
    //     {
    //         _mediator = mediator;
            
    //     }

        [HttpGet]  //api/activities
        public async Task<IActionResult> GetActvities()
        {
            //return await _context.Activities.ToListAsync();
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]  //api/activities/dfgd
        public async Task<IActionResult> GetActvitity(Guid id)
        {     
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity){
            return HandleResult(await Mediator.Send(new Create.Command {Activity = activity}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity){
            activity.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command{Activity = activity}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id){
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}