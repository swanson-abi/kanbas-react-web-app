export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
          <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
          <select id="wd-group">
        <option value="ASSIGNMENT">Assignment</option>
      </select><br/>
          </tr>
          <tr>
          <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As:</label>
            </td>
          <select id="wd-display-grade-as">
        <option value="PERCENTAGE">Percentage</option>
        <option value="DECIMAL">Decimal</option>
      </select><br/>
          </tr>
          <tr>
          <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type:</label>
            </td>
          <select id="wd-submission-type">
        <option value="ONLINE">Online</option>
        <option value="IN-PERSON">In Person</option>
      </select><br/>

      
          </tr>
          <tr>
          <label>Online Entry Options:</label>
          <br />
          <input type="checkbox" name="check-options" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
          <br />
          <input type="checkbox" name="check-options" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
          <br />
          <input type="checkbox" name="check-options" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
          <br />
          <input type="checkbox" name="check-options" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotations">Student Annotations</label>
          <br />
          <input type="checkbox" name="check-options" id="wd-file-upload" />
          <label htmlFor="wd-file-uploads">File Uploads</label>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To:</label>
            </td>
            <td>
              <input  />
            </td>
            <br />
          </tr>
          <br />
          <label htmlFor="wd-due-date"> Due </label>
          <input type="date" id="wd-due-date" value="2024-09-24" />
          <br />

          <br />
          <label htmlFor="wd-available-from"> Available From: </label>
          <input type="date" id="wd-available-from" value="2024-09-20" />
          <br />

          <br />
          <label htmlFor="wd-available-until"> Until: </label>
          <input type="date" id="wd-available-until" value="2024-09-27" />
          <br />
          <button>
            Cancel
          </button>
          <button>
            Save
          </button>
        </table>
      </div>
  );}
