!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["warp-workflows"]=t():e["warp-workflows"]=t()}(global,(function(){return(()=>{var e={266:(e,t,o)=>{var a={"./git/change_url_of_remote_git_repository.yaml":535,"./git/create_new_git_remote_branch.yaml":216,"./git/delete_local_and_remote_git_branch.yaml":721,"./git/delete_local_git_branch.yaml":847,"./git/delete_remote_git_branch.yaml":566,"./git/modify_the_most_recent_commit_message.yaml":369,"./git/push_a_tag_to_a_remote_git_repository.yaml":287,"./git/remove_a_git_submodule.yaml":3,"./git/rename_local_git_branch.yaml":84,"./git/reset_file_back_to_git_revision.yaml":397,"./git/reset_local_branch_to_match_remote_branch.yaml":331,"./git/squash_last_n_commits_together.yaml":435,"./git/undo_git_add.yaml":823,"./git/undo_most_recent_git_commit.yaml":604,"./git_undo_destroy_changes.yaml":474,"./git_undo_keep_changes.yaml":283,"./while_loop.yaml":174};function r(e){var t=s(e);return o(t)}function s(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=266},535:e=>{"use strict";e.exports=JSON.parse('{"name":"Change URL of remote git repository","command":"git remote set-url origin {{url}}","tags":["git"],"description":"Set the URL for a remote git repository to a new URL","arguments":[{"name":"url","description":"The new URL the remote repository should point to","default_value":null}],"source_url":"https://stackoverflow.com/questions/2432764/how-to-change-the-uri-url-for-a-remote-git-repository","author":"hobbs","author_url":"https://stackoverflow.com/users/152948/hobbs","shells":[]}')},216:e=>{"use strict";e.exports=JSON.parse('{"name":"Create new git remote branch","command":"git checkout -b {{branch_name}} # Create a new branch and check it out\\ngit push {{remote_name}} {{branch_name}}","tags":["git"],"description":null,"arguments":[{"name":"branch_name","description":"The name of the branch to be created","default_value":null},{"name":"remote_name","description":"The name of the remote git repository","default_value":"origin"}],"source_url":"https://stackoverflow.com/questions/1519006/how-do-you-create-a-remote-git-branch","author":"Ikke","author_url":"https://stackoverflow.com/users/20261/ikke","shells":[]}')},721:e=>{"use strict";e.exports=JSON.parse('{"name":"Delete local and remote git branch","command":"git push -d {{remote_name}} {{branchname}}\\ngit branch -d {{branch_name}}","tags":["git"],"description":"Delete a git branch both locally and remotely","arguments":[{"name":"remote_name","description":"The name of the remote where the branch lives","default_value":null},{"name":"branch_name","description":"The name of the branch to delete","default_value":null}],"source_url":"https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely","author":"Matthew Rankin","author_url":"https://stackoverflow.com/users/95592/matthew-rankin","shells":[]}')},847:e=>{"use strict";e.exports=JSON.parse('{"name":"Delete local git branch","command":"git branch -d {{branch_name}}","tags":["git"],"description":"Delete a local git branch","arguments":[{"name":"branch_name","description":"The name of the branch to delete","default_value":null}],"source_url":"https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely","author":"Matthew Rankin","author_url":"https://stackoverflow.com/users/95592/matthew-rankin","shells":[]}')},566:e=>{"use strict";e.exports=JSON.parse('{"name":"Delete remote git branch","command":"git push -d {{remote_name}} {{branchname}}","tags":["git"],"description":"Delete a remote git branch","arguments":[{"name":"remote_name","description":"The name of the remote where the branch lives","default_value":null},{"name":"branch_name","description":"The name of the branch to delete","default_value":null}],"source_url":"https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely","author":"Matthew Rankin","author_url":"https://stackoverflow.com/users/95592/matthew-rankin","shells":[]}')},369:e=>{"use strict";e.exports=JSON.parse('{"name":"Modify the most recent commit message","command":"git commit --amend -m \\"{{new_commit_message}}\\"","tags":["git"],"description":"Ammend the most recent git commit with a new message","arguments":[{"name":"new_commit_message","description":"The new commit message","default_value":null}],"source_url":"https://stackoverflow.com/questions/179123/how-to-modify-existing-unpushed-commit-messages","author":"lfx_cool","author_url":"https://stackoverflow.com/users/268413/lfx-cool","shells":[]}')},287:e=>{"use strict";e.exports=JSON.parse('{"name":"Push a tag to a remote git repository","command":"git push origin {{tag_name}}","tags":["git"],"description":null,"arguments":[{"name":"tag_name","description":"The name of the tag that should be pushed to the remote git repository","default_value":null}],"source_url":"https://stackoverflow.com/questions/5195859/how-do-you-push-a-tag-to-a-remote-repository-using-git","author":"Trevor","author_url":"https://stackoverflow.com/users/207162/trevor","shells":[]}')},3:e=>{"use strict";e.exports=JSON.parse('{"name":"Remove a git submodule","command":"git rm {{submodule_path}}","tags":["git"],"description":null,"arguments":[{"name":"submodule_path","description":"The path to the submodule that should be removed","default_value":null}],"source_url":"https://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule","author":"John Douthat","author_url":"https://stackoverflow.com/users/2774/john-douthat","shells":[]}')},84:e=>{"use strict";e.exports=JSON.parse('{"name":"Rename local git branch","command":"git branch -m {{oldname}} {{newname}}","tags":["git"],"description":"Rename local git branch","arguments":[{"name":"oldname","description":"The old name of the branch","default_value":null},{"name":"newname","description":"The name the branch should be renamed to","default_value":null}],"source_url":"https://stackoverflow.com/questions/6591213/how-do-i-rename-a-local-git-branch","author":"siride","author_url":"https://stackoverflow.com/users/394487/siride","shells":[]}')},397:e=>{"use strict";e.exports=JSON.parse('{"name":"Reset file back to git revision","command":"git reset {{commit_hash}} {{file_name}}","tags":["git"],"description":"Reset the file back to a previous commit hash","arguments":[{"name":"commit_hash","description":"The commit hash the file should be restored to","default_value":null},{"name":"file_name","description":"The file that should be restored","default_value":null}],"source_url":"https://stackoverflow.com/questions/215718/how-can-i-reset-or-revert-a-file-to-a-specific-revision","author":"Chris Lloyd","author_url":"https://stackoverflow.com/users/42413/chris-lloyd","shells":[]}')},331:e=>{"use strict";e.exports=JSON.parse('{"name":"Reset local branch to match remote branch","command":"git fetch origin\\ngit reset --hard {{ branch }}","tags":["git"],"description":"Reset the current local branch to match the remote branch","arguments":[{"name":"branch","description":"The name of the remote branch that the local branch should be reset to","default_value":"origin/master"}],"source_url":"https://stackoverflow.com/questions/1628088/reset-local-repository-branch-to-be-just-like-remote-repository-head","author":"Dan Moulding","author_url":"https://stackoverflow.com/users/95706/dan-moulding","shells":[]}')},435:e=>{"use strict";e.exports=JSON.parse('{"name":"Squash last n commits together","command":"git reset --soft HEAD~{{num_commits}} &&\\ngit commit","tags":["git"],"description":"Squash the last n commits together into a single commit","arguments":[{"name":"num_commits","description":"The number of commits that should be squashed together","default_value":null}],"source_url":"https://stackoverflow.com/questions/5189560/squash-my-last-x-commits-together-using-git","author":"Chris Johnsen","author_url":"https://stackoverflow.com/users/193688/chris-johnsen","shells":[]}')},823:e=>{"use strict";e.exports=JSON.parse('{"name":"Undo git add","command":"git reset {{file}}","tags":["git"],"description":"Undo a file that was staged via git add","arguments":[{"name":"file","description":"The file to unstage","default_value":null}],"source_url":"https://stackoverflow.com/questions/348170/how-do-i-undo-git-add-before-commit","author":"genehack","author_url":"https://stackoverflow.com/users/39933/genehack","shells":[]}')},604:e=>{"use strict";e.exports=JSON.parse('{"name":"Undo most recent git commit","command":"git reset HEAD~","tags":["git"],"description":"Undo the most recent git commit, while keeping changes","arguments":[],"source_url":"https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git","author":"Mark Amery","author_url":"https://stackoverflow.com/users/1709587","shells":[]}')},474:e=>{"use strict";e.exports=JSON.parse('{"name":"Undo last git commit and destroy changes","tags":["git"],"command":"git reset --hard HEAD~1","author":"Warp Team"}')},283:e=>{"use strict";e.exports=JSON.parse('{"name":"Undo last git commit and keep changes","tags":["git"],"command":"git reset --soft HEAD~1","author":"Warp Team"}')},174:e=>{"use strict";e.exports=JSON.parse('{"name":"While loop","tags":["shell"],"command":"while {{condition}}; do\\n\\t{{command}}\\ndone","arguments":[{"name":"condition","description":"The condition for the while loop"},{"name":"command","description":"The command to execute within the while loop"}],"author":"Warp Team","shells":["bash","zsh"]}')}},t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.r(a),o.d(a,{WORKFLOWS:()=>e});const e=new Map,t=o(266);t.keys().forEach((o=>{const a=t(o),r=o.split("/").pop().split(".").shift();let s=Object.assign(Object.assign({},a),{slug:r});e.set(r,s)}))})(),a})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FycC13b3JrZmxvd3MuanMiLCJtYXBwaW5ncyI6IkNBQUEsU0FBMkNBLEVBQU1DLEdBQzFCLGlCQUFaQyxTQUEwQyxpQkFBWEMsT0FDeENBLE9BQU9ELFFBQVVELElBQ1EsbUJBQVhHLFFBQXlCQSxPQUFPQyxJQUM5Q0QsT0FBTyxHQUFJSCxHQUNlLGlCQUFaQyxRQUNkQSxRQUFRLGtCQUFvQkQsSUFFNUJELEVBQUssa0JBQW9CQyxJQVIzQixDQVNHSyxRQUFRLFdBQ1gsTSwyQkNWQSxJQUFJQyxFQUFNLENBQ1QsaURBQWtELElBQ2xELDBDQUEyQyxJQUMzQyxnREFBaUQsSUFDakQscUNBQXNDLElBQ3RDLHNDQUF1QyxJQUN2QyxtREFBb0QsSUFDcEQsbURBQW9ELElBQ3BELG9DQUFxQyxFQUNyQyxxQ0FBc0MsR0FDdEMsNkNBQThDLElBQzlDLHVEQUF3RCxJQUN4RCw0Q0FBNkMsSUFDN0MsMEJBQTJCLElBQzNCLHlDQUEwQyxJQUMxQyxrQ0FBbUMsSUFDbkMsK0JBQWdDLElBQ2hDLG9CQUFxQixLQUl0QixTQUFTQyxFQUFlQyxHQUN2QixJQUFJQyxFQUFLQyxFQUFzQkYsR0FDL0IsT0FBT0csRUFBb0JGLEdBRTVCLFNBQVNDLEVBQXNCRixHQUM5QixJQUFJRyxFQUFvQkMsRUFBRU4sRUFBS0UsR0FBTSxDQUNwQyxJQUFJSyxFQUFJLElBQUlDLE1BQU0sdUJBQXlCTixFQUFNLEtBRWpELE1BREFLLEVBQUVFLEtBQU8sbUJBQ0hGLEVBRVAsT0FBT1AsRUFBSUUsR0FFWkQsRUFBZVMsS0FBTyxXQUNyQixPQUFPQyxPQUFPRCxLQUFLVixJQUVwQkMsRUFBZVcsUUFBVVIsRUFDekJSLEVBQU9ELFFBQVVNLEVBQ2pCQSxFQUFlRSxHQUFLLEssdXlRQ3JDaEJVLEVBQTJCLEdBRy9CLFNBQVNSLEVBQW9CUyxHQUU1QixJQUFJQyxFQUFlRixFQUF5QkMsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFwQixRQUdyQixJQUFJQyxFQUFTaUIsRUFBeUJDLEdBQVksQ0FHakRuQixRQUFTLElBT1YsT0FIQXNCLEVBQW9CSCxHQUFVbEIsRUFBUUEsRUFBT0QsUUFBU1UsR0FHL0NULEVBQU9ELFFDcEJmVSxFQUFvQmEsRUFBSSxDQUFDdkIsRUFBU3dCLEtBQ2pDLElBQUksSUFBSUMsS0FBT0QsRUFDWGQsRUFBb0JDLEVBQUVhLEVBQVlDLEtBQVNmLEVBQW9CQyxFQUFFWCxFQUFTeUIsSUFDNUVULE9BQU9VLGVBQWUxQixFQUFTeUIsRUFBSyxDQUFFRSxZQUFZLEVBQU1DLElBQUtKLEVBQVdDLE1DSjNFZixFQUFvQkMsRUFBSSxDQUFDa0IsRUFBS0MsSUFBVWQsT0FBT2UsVUFBVUMsZUFBZUMsS0FBS0osRUFBS0MsR0NDbEZwQixFQUFvQndCLEVBQUtsQyxJQUNILG9CQUFYbUMsUUFBMEJBLE9BQU9DLGFBQzFDcEIsT0FBT1UsZUFBZTFCLEVBQVNtQyxPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RyQixPQUFPVSxlQUFlMUIsRUFBUyxhQUFjLENBQUVxQyxPQUFPLEssa0VDMEJoRCxNQUFNQyxFQUFZLElBQUlDLElBSXZCQyxFQUFpQixPQU12QkEsRUFBZXpCLE9BQU8wQixTQUFTaEIsSUFDN0IsTUFBTUksRUFBTVcsRUFBZWYsR0FDckJpQixFQUF1QmpCLEVBZmJrQixNQUFNLEtBQUtDLE1BQU9ELE1BQU0sS0FBTUUsUUFnQjlDLElBQUlDLEVBQVcsK0JBQ1ZqQixHQUFHLENBQ05hLEtBQUFBLElBRUZKLEVBQVVTLElBQUlMLEVBQU1JLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJwLXdvcmtmbG93cy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vd2FycC13b3JrZmxvd3MvfC9cXC55YSIsIndlYnBhY2s6Ly93YXJwLXdvcmtmbG93cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YXJwLXdvcmtmbG93cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2FycC13b3JrZmxvd3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93YXJwLXdvcmtmbG93cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dhcnAtd29ya2Zsb3dzLy4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2FycC13b3JrZmxvd3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2FycC13b3JrZmxvd3NcIl0gPSBmYWN0b3J5KCk7XG59KShnbG9iYWwsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsInZhciBtYXAgPSB7XG5cdFwiLi9naXQvY2hhbmdlX3VybF9vZl9yZW1vdGVfZ2l0X3JlcG9zaXRvcnkueWFtbFwiOiA1MzUsXG5cdFwiLi9naXQvY3JlYXRlX25ld19naXRfcmVtb3RlX2JyYW5jaC55YW1sXCI6IDIxNixcblx0XCIuL2dpdC9kZWxldGVfbG9jYWxfYW5kX3JlbW90ZV9naXRfYnJhbmNoLnlhbWxcIjogNzIxLFxuXHRcIi4vZ2l0L2RlbGV0ZV9sb2NhbF9naXRfYnJhbmNoLnlhbWxcIjogODQ3LFxuXHRcIi4vZ2l0L2RlbGV0ZV9yZW1vdGVfZ2l0X2JyYW5jaC55YW1sXCI6IDU2Nixcblx0XCIuL2dpdC9tb2RpZnlfdGhlX21vc3RfcmVjZW50X2NvbW1pdF9tZXNzYWdlLnlhbWxcIjogMzY5LFxuXHRcIi4vZ2l0L3B1c2hfYV90YWdfdG9fYV9yZW1vdGVfZ2l0X3JlcG9zaXRvcnkueWFtbFwiOiAyODcsXG5cdFwiLi9naXQvcmVtb3ZlX2FfZ2l0X3N1Ym1vZHVsZS55YW1sXCI6IDMsXG5cdFwiLi9naXQvcmVuYW1lX2xvY2FsX2dpdF9icmFuY2gueWFtbFwiOiA4NCxcblx0XCIuL2dpdC9yZXNldF9maWxlX2JhY2tfdG9fZ2l0X3JldmlzaW9uLnlhbWxcIjogMzk3LFxuXHRcIi4vZ2l0L3Jlc2V0X2xvY2FsX2JyYW5jaF90b19tYXRjaF9yZW1vdGVfYnJhbmNoLnlhbWxcIjogMzMxLFxuXHRcIi4vZ2l0L3NxdWFzaF9sYXN0X25fY29tbWl0c190b2dldGhlci55YW1sXCI6IDQzNSxcblx0XCIuL2dpdC91bmRvX2dpdF9hZGQueWFtbFwiOiA4MjMsXG5cdFwiLi9naXQvdW5kb19tb3N0X3JlY2VudF9naXRfY29tbWl0LnlhbWxcIjogNjA0LFxuXHRcIi4vZ2l0X3VuZG9fZGVzdHJveV9jaGFuZ2VzLnlhbWxcIjogNDc0LFxuXHRcIi4vZ2l0X3VuZG9fa2VlcF9jaGFuZ2VzLnlhbWxcIjogMjgzLFxuXHRcIi4vd2hpbGVfbG9vcC55YW1sXCI6IDE3NFxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDI2NjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBpbnRlcmZhY2UgV29ya2Zsb3cge1xuICBzbHVnOiBXb3JrZmxvd1NsdWc7XG4gIG5hbWU6IHN0cmluZztcbiAgY29tbWFuZDogc3RyaW5nO1xuICB0YWdzPzogW3N0cmluZ107XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBhcmd1bWVudHM/OiBbQXJndW1lbnRdO1xuICBzb3VyY2VfdXJsPzogc3RyaW5nO1xuICBhdXRob3I/OiBzdHJpbmc7XG4gIGF1dGhvcl91cmw/OiBzdHJpbmc7XG4gIHNoZWxscz86IFtTaGVsbF07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJndW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkZWZhdWx0X3ZhbHVlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBTaGVsbCB7XG4gIEJhc2ggPSBcImJhc2hcIixcbiAgRmlzaCA9IFwiZmlzaFwiLFxuICBac2ggPSBcInpzaFwiLFxufVxuXG5leHBvcnQgdHlwZSBXb3JrZmxvd1NsdWcgPSBzdHJpbmc7XG5cbmZ1bmN0aW9uIGdldEZpbGVOYW1lT25seShmaWxlUGF0aDogc3RyaW5nKSA6IHN0cmluZyB7XG4gIHJldHVybiBmaWxlUGF0aC5zcGxpdChcIi9cIikucG9wKCkhLnNwbGl0KFwiLlwiKSEuc2hpZnQoKSE7XG59XG5cbmV4cG9ydCBjb25zdCBXT1JLRkxPV1MgPSBuZXcgTWFwPFdvcmtmbG93U2x1ZywgV29ya2Zsb3c+KCk7XG5cbi8vIFVzaW5nIFdlYnBhY2ssIGR5bmFtaWNhbGx5IGxvYWQgYWxsIHRoZSBZQU1MIGZpbGVzIGluIHRoZSBgc3BlY3NgIGRpcmVjdG9yeVxuLy8gYXMgSmF2YXNjcmlwdCBvYmplY3RzIGFuZCBzdG9yZSB0aGUgb2JqZWN0cyB3aXRoaW4gdGhlIGBXT1JLRkxPV1NgIG1hcC5cbmNvbnN0IHJlcXVpcmVDb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFxuICBcInlhbWwtbG9hZGVyIS4uL3NwZWNzXCIsXG4gIHRydWUsXG4gIC9cXC55YT9tbCQvXG4pO1xuXG5yZXF1aXJlQ29udGV4dC5rZXlzKCkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgb2JqID0gcmVxdWlyZUNvbnRleHQoa2V5KTtcbiAgY29uc3Qgc2x1ZyA9IGdldEZpbGVOYW1lT25seShrZXkpO1xuICBsZXQgd29ya2Zsb3cgPSB7XG4gICAgLi4ub2JqLFxuICAgIHNsdWcsXG4gIH0gYXMgV29ya2Zsb3c7XG4gIFdPUktGTE9XUy5zZXQoc2x1Zywgd29ya2Zsb3cpO1xufSk7Il0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImdsb2JhbCIsIm1hcCIsIndlYnBhY2tDb250ZXh0IiwicmVxIiwiaWQiLCJ3ZWJwYWNrQ29udGV4dFJlc29sdmUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibyIsImUiLCJFcnJvciIsImNvZGUiLCJrZXlzIiwiT2JqZWN0IiwicmVzb2x2ZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwiV09SS0ZMT1dTIiwiTWFwIiwicmVxdWlyZUNvbnRleHQiLCJmb3JFYWNoIiwic2x1ZyIsInNwbGl0IiwicG9wIiwic2hpZnQiLCJ3b3JrZmxvdyIsInNldCJdLCJzb3VyY2VSb290IjoiIn0=